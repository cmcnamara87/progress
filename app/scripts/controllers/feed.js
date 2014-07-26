'use strict';

angular.module('progressClientApp')
    .controller('FeedCtrl', function($scope, Restangular) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

		
        // $scope.cats = Restangular.one('me').all('following').all('posts').getList();
		$scope.posts = Restangular.one('me').all('following').all('posts').getList();
        $scope.online = Restangular.one('me').all('following').all('online').getList();
    });
