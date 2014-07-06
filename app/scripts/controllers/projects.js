'use strict';

angular.module('progressClientApp')
    .controller('ProjectsCtrl', function($scope, projects) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.projects = projects;
    });
