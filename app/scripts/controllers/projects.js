'use strict';

angular.module('progressClientApp')
    .controller('ProjectsCtrl', function($scope, projects, user) {
        var vm = $scope;
        vm.projects = projects;
        vm.user = user;
    });
