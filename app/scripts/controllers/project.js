'use strict';

angular.module('progressClientApp')

.controller('ProjectCtrl', function($scope, Restangular, Post, User,
    $interval, $rootScope, $log, $upload, ENV, project, posts) {
    $scope.awesomeThings = [
        'HTML5 Boilerplate',
        'AngularJS',
        'Karma'
    ];
    $scope.project = project;
    $scope.posts = posts;

    var vm = $scope;
    vm.postUpdate = postUpdate;
    vm.onFileSelect = onFileSelect;
    vm.newPostText = '';
    vm.files = null;

    console.log('posts', posts);
    $scope.postsWithImages = _.filter(posts, function(post) {
        return post.type === 'SCREENSHOT_COLLECTION';
    }).reverse();
    $scope.timelapsePostIndex = 0;
    $scope.timelapsePost = $scope.postsWithImages[$scope.timelapsePostIndex++] || null;
    $scope.restart = restart;
    //////
    $interval(function() {
        if ($scope.timelapsePostIndex !== $scope.postsWithImages.length) {
            var nextIndex = $scope.timelapsePostIndex++ % $scope.postsWithImages.length;
            $scope.timelapsePost = $scope.postsWithImages[nextIndex];
        }
    }, 500);

    function restart() {
        $scope.timelapsePostIndex = 0;
    }



    function postUpdate(text, files) {
        if (files && files.length) {
            $log.debug('image update!');
            postImageUpdate(text, files);
            // post it as a screenshot
            return;
        }

        vm.newPostText = '';
        var tempPost = {
            text: text,
            user: $rootScope.currentUser,
            project: $scope.project.id,
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
        if (!files || !files.length) {
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
            url: ENV.apiEndpoint + '/me/projects/' + $scope.project.id + '/screenshots',
            //method: 'POST' or 'PUT',
            //headers: {'header-key': 'header-value'},
            withCredentials: true,
            data: {
                text: text
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

    function getPosts() {
        return Restangular.one('users', $scope.project['user_id'])
            .one('projects', $scope.project.id)
            .all('posts').getList().then(function(posts) {
                vm.posts = posts;
            });
        // return Post.getFeed().then(function(posts) {
        //     vm.posts = posts;
        // });
    }
});
