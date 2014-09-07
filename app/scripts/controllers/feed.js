'use strict';

angular.module('progressClientApp')
    .controller('FeedCtrl', function($scope, Restangular, Post, User) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

		console.log('hello world?');
        var vm = $scope;
        
        // $scope.cats = Restangular.one('me').all('following').all('posts').getList();
		$scope.posts = Post.getFeed();
        User.getOnline().then(function(onlineUsers) {
            $scope.online = onlineUsers;
            console.log('got onlie');
            // Get offline
            Restangular.one('me').all('following').getList().then(function(allUsers) {
                // console.log('getting offliem', allUsers);
                // vm.offline = allUsers;
                vm.offline = _.reject(allUsers, function(user) {
                    return _.find(onlineUsers, function(yo) {
                        return yo.id === user.id;
                    });
                    // return false;
                    // return _.find(onlineUsers, {id: user.id});
                });
            });
        });
    });
