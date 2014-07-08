'use strict';

angular.module('progressClientApp')
    .controller('FeedCtrl', function($scope, posts, online) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.posts = posts;
        $scope.online = online;
    });
