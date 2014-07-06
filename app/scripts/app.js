'use strict';

angular
    .module('progressClientApp', [
        'ngCookies',
        'ngSanitize',
        'ui.router',
        'restangular'
    ]).config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

        RestangularProvider.setBaseUrl('api/index.php');
        RestangularProvider.setDefaultHttpFields({
            withCredentials: true
        });

        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html'
            })
            .state('user', {
                abstract: true,
                url: '/user/:userId',
                template: '<ui-view></ui-view>'
            })
            .state('user.projects', {
                url: '/projects',
                resolve: {
                    projects: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId).all('projects').getList();
                        }
                    ]
                },
                controller: 'ProjectsCtrl',
                templateUrl: 'views/projects.html'
            });
    });
