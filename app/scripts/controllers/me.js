'use strict';

/**
 * @ngdoc function
 * @name progressClientApp.controller:MeCtrl
 * @description
 * # MeCtrl
 * Controller of the progressClientApp
 */
angular.module('progressClientApp')
    .controller('MeCtrl', function(Restangular) {
        var vm = this;

        activate();

        ///////

        function activate() {
            // Get the projects
            getProjects();
        }

        function getProjects() {
            return Restangular.one('me').all('projects').getList().then(function(projects) {
                vm.projects = projects;
            });
        }

    });
