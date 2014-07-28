'use strict';

angular.module('progressClientApp')
    .controller('FeedCtrl', function($scope, Restangular, Post, User) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

		console.log('hello world?');
        
        // $scope.cats = Restangular.one('me').all('following').all('posts').getList();
		$scope.posts = Post.getFeed();
        $scope.online = User.getOnline();
    });
