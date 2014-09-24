'use strict';

angular.module('progressClientApp')
    .controller('FeedCtrl', function($scope, Restangular, Post, User, $rootScope, $log) {
        var vm = $scope;
        vm.posts = null;
        vm.online = null;
        vm.activeProject = null;
        vm.post = post;
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
                if($rootScope.currentUser) {
                    var currentUserOnline = _.findWhere(vm.online, {id: $rootScope.currentUser.id});
                    if(currentUserOnline) {
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

        function post(text) {
            Restangular.one('me').all('posts').post({
                text: text
            }).then(function(post) {
                vm.posts.unshift(post);
            });
        }
    });
