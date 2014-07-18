'use strict';

angular
    .module('progressClientApp', [
        'ngCookies',
        'ngSanitize',
        'ui.router',
        'restangular',
        'angularMoment'
    ]).config(function($stateProvider, $urlRouterProvider, RestangularProvider) {

        RestangularProvider.setBaseUrl('http://ec2-54-206-66-123.ap-southeast-2.compute.amazonaws.com/progress;api/index.php');
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
                resolve: {
                    posts: ['Restangular',
                        function(Restangular) {
                            return Restangular.one('me').all('following').all('posts').getList();
                        }
                    ],
                    online: ['Restangular',
                        function(Restangular) {
                            return Restangular.one('me').all('following').all('online').getList();
                        }
                    ],
                },
                controller: 'FeedCtrl',
                templateUrl: 'views/feed.html'
            })
            .state('user', {
                abstract: true,
                url: '/users/:userId',
                template: '<ui-view></ui-view>'
            })
            .state('user.projects', {
                url: '/projects',
                resolve: {
                    projects: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId).all('projects').getList();
                        }
                    ],
                },
                controller: 'ProjectsCtrl',
                templateUrl: 'views/projects.html'
            })
            .state('user.project', {
                url: '/projects/:projectId',
                resolve: {
                    project: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId).one('projects', $stateParams.projectId).get();
                        }
                    ],
                    posts: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId).one('projects', $stateParams.projectId).all('posts').getList();
                        }
                    ]
                },
                controller: 'ProjectCtrl',
                templateUrl: 'views/project.html'
            });
    });
