'use strict';

angular.module('progressClientApp')
    .controller('ProjectCtrl', function($scope, project, posts) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.project = project;
        $scope.posts = posts;
    });
