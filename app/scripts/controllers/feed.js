'use strict';

angular.module('progressClientApp')
    .controller('FeedCtrl', function($scope, Restangular, Post, User, $rootScope, $log, $upload, ENV) {
        var vm = $scope;
        vm.posts = null;
        vm.online = null;
        vm.activeProject = null;
        vm.postUpdate = postUpdate;
        vm.onFileSelect = onFileSelect;
        vm.newPostText = '';
        vm.files = null;
        activate();

        /////////

        function activate() {
            getPosts();
            getOnline().then(function() {
                getOffline();
            });
            getLeaderboard();
        }

        function getLeaderboard() {
            Restangular.one('me').all('following').all('leaderboard').getList().then(function(leaderboard) {
                vm.leaderboard = _.reject(leaderboard, function(user) {
                    return user.seconds === 0;
                });
                // vm.leaderboard = _.groupBy(leaderboard, function(time) { 
                // return time.userId;
                // return Math.floor(num); 
                // }); //leaderboard;
            });
        }

        function getPosts() {
            return Post.getFeed().then(function(posts) {
                vm.posts = posts;
            });
        }

        function getOnline() {
            return User.getOnline().then(function(onlineUsers) {
                vm.online = onlineUsers;
                if ($rootScope.currentUser) {
                    var currentUserOnline = _.findWhere(vm.online, {
                        id: $rootScope.currentUser.id
                    });
                    if (currentUserOnline) {
                        vm.activeProject = currentUserOnline.activeProject;
                    }
                }
            });
        }

        function getOffline() {
            Restangular.one('me').all('following').getList().then(function(allUsers) {

                // Remove all online users from offline
                vm.offline = _.reject(allUsers, function(allUser) {
                    return _.find(vm.online, function(onlineUser) {
                        return onlineUser.id === allUser.id;
                    });
                });
            });
        }

        function postUpdate(text, files) {
            if(files && files.length) {
                $log.debug('image update!');
                postImageUpdate(text, files);
                // post it as a screenshot
                return;
            }

            vm.newPostText = '';
            var tempPost = {
                text: text,
                user: $rootScope.currentUser,
                project: vm.activeProject,
                type: 'TEXT',
                created: new Date().getTime() * 1000
            };
            vm.posts.unshift(tempPost);

            Restangular.one('me').all('posts').post({
                text: text
            }).then(function(post) {
                angular.copy(post, tempPost);
            });
        }

        function postImageUpdate(text, files) {
            if(!files || !files.length) {
                $log.error('No files given');
            }
            
            var file = vm.files[0];

            var baseUrl = '';
            // if (document.location.hostname === '127.0.0.1' || document.location.hostname === 'localhost') {
            //     baseUrl = 'api';
            // } else {
            //     baseUrl = 'http://ec2-54-206-66-123.ap-southeast-2.compute.amazonaws.com/progress/api/index.php';
            // }

            $scope.upload = $upload.upload({
                url: ENV.apiEndpoint + '/me/projects/' + vm.activeProject.id + '/screenshots', 
                //method: 'POST' or 'PUT',
                //headers: {'header-key': 'header-value'},
                withCredentials: true,
                data: {
                    text: text,
                    project_id: vm.activeProject.id 
                },
                file: file, // or list of files ($files) for html5 only
                //fileName: 'doc.jpg' or ['1.jpg', '2.jpg', ...] // to modify the name of the file(s)
                // customize file formData name ('Content-Disposition'), server side file variable name. 
                //fileFormDataName: myFile, //or a list of names for multiple files (html5). Default is 'file' 
                // customize how data is added to formData. See #40#issuecomment-28612000 for sample code
                //formDataAppender: function(formData, key, val){}
            }).progress(function(evt) {
                $log.debug('percent: ' + parseInt(100.0 * evt.loaded / evt.total));
            }).success(function(data, status, headers, config) {
                // file is uploaded successfully
                // console.log(data);
                getPosts();
            });
            vm.files = null;
            vm.newPostText = '';
                //.error(...)
                //.then(success, error, progress); 
                // access or attach event listeners to the underlying XMLHttpRequest.
                //.xhr(function(xhr){xhr.upload.addEventListener(...)})
        }


        function onFileSelect($files) {
            vm.files = $files;

            //$files: an array of files selected, each file has name, size, and type.
            /* alternative way of uploading, send the file binary with the file's content-type.
               Could be used to upload files to CouchDB, imgur, etc... html5 FileReader is needed. 
               It could also be used to monitor the progress of a normal http post/put request with large data*/
            // $scope.upload = $upload.http({...})  see 88#issuecomment-31366487 for sample code.

        }
    });
