'use strict';

angular
    .module('progressClientApp', [
        'ngCookies',
        'ngSanitize',
        'ui.router',
        'restangular',
        'angularMoment',
        'cgBusy',
        'http-auth-interceptor',
        'ui.bootstrap',
        'angular-loading-bar',
        'monospaced.elastic',
        'angularFileUpload',
        'angulartics', 
        'angulartics.google.analytics',
        'bernhardposselt.enhancetext'
    ]).value('cgBusyDefaults', {
        message: 'Loading',
        // backdrop: false,
        // templateUrl: 'my_custom_template.html',
        // delay: 300,
        // minDuration: 700
    }).value('downloadUrl', 'https://github.com/cmcnamara87/progress-mac/releases/download/v0.19/Progress.zip')
    .run(function($rootScope, $modal, User, authService, Restangular, downloadUrl, $stateParams, 
        notificationService, $analytics) { 
        $rootScope.User = User;
        $rootScope.downloadUrl = downloadUrl;
        $rootScope.notificationService = notificationService;
        $rootScope.$stateParams = $stateParams;
        $rootScope.$on('event:auth-loginRequired', function() {
            var modalInstance = $modal.open({
                templateUrl: 'views/login-modal.html',
                controller: ['$scope', '$modalInstance',
                    function($scope, $modalInstance) {
                        $scope.login = function(user) {
                            $analytics.eventTrack('user-login', {category: 'user'});
                            Restangular.all('users').login(user).then(function(currentUser) {
                                notificationService.loadNotifications();
                                // ga('set', { userId: currentUser.id });
                                ga('set', 'userId', currentUser.id);
                                // $rootscope.currentUser = user;
                                // User.login(user).then(function() {
                                $modalInstance.close(currentUser);
                            });
                        };
                    }
                ],
            });

            modalInstance.result.then(function(currentUser) {
                // $scope.selected = selectedItem;
                $rootScope.currentUser = currentUser;
                authService.loginConfirmed();
            }, function() {
                // $log.info('Modal dismissed at: ' + new Date());
            });
        });

        // Get user if logged in
        User.getLoggedIn().then(function(currentUser) {
            if(currentUser) {
                notificationService.loadNotifications();
            }
        });
        
    }).config(function($stateProvider, $urlRouterProvider, enhanceTextFilterProvider, 
        RestangularProvider, $analyticsProvider) {
        console.log('host name', document.location.hostname);

        enhanceTextFilterProvider.setOptions({
            embeddedYoutubeWidth: '100%',
            embeddedYoutubeHeight: '275px',
        });
        $analyticsProvider.virtualPageviews(true);

        if (document.location.hostname === '127.0.0.1' || document.location.hostname === 'localhost') {
            RestangularProvider.setBaseUrl('api/index.php');
        } else {
            RestangularProvider
            .setBaseUrl('http://ec2-54-206-66-123.ap-southeast-2.compute.amazonaws.com/progress/api/index.php');
        }

        RestangularProvider.addElementTransformer('users', true, function(user) {
            user.addRestangularMethod('login', 'post', 'login');
            return user;
        });

        RestangularProvider.setDefaultHeaders({
            'Content-Type': undefined
        });

        RestangularProvider.setDefaultHttpFields({
            'withCredentials': true
        });

        // $httpProvider.defaults.useXDomain = true;
        // delete $httpProvider.defaults.headers.common['X-Requested-With'];
        // For any unmatched url, redirect to /state1
        $urlRouterProvider.otherwise('/');
        //
        // Now set up the states
        $stateProvider
            .state('home', {
                url: '/',
                resolve: {
                    user: ['User',
                        function(User) {
                            return User.getLoggedIn();
                        }
                    ]
                },
                controller: ['$state', 'user', function($state, user) {
                    console.log('root page', user);
                    if(user) {
                        $state.go('me.feed');
                    } else {
                        $state.go('landing');
                    }
                }]
            })
            .state('me', {
                url: '/me',
                abstract: true,
                template: '<ui-view></ui-view>'
            })
            .state('me.feed', {
                url: '/feed',
                resolve: {
                    user: ['Restangular', '$rootScope', 'notificationService',
                        function(Restangular, $rootScope, notificationService) {
                            return Restangular.one('me').one('user').get().then(function(currentUser) {
                                $rootScope.currentUser = currentUser;
                                notificationService.loadNotifications();
                                return currentUser;
                            });
                        }
                    ]
                },
                controller: 'FeedCtrl',
                templateUrl: 'views/feed.html'
            })
            .state('landing', {
                url: '/landing',
                templateUrl: 'views/landing.html'
            })
            .state('gettingStarted', {
                url: '/getting-started',
                templateUrl: 'views/getting-started.html'
            })
            .state('intro', {
                url: '/intro',
                // controller: 'RegisterCtrl',
                templateUrl: 'views/intro.html'
            })
            .state('register', {
                url: '/register',
                controller: 'RegisterCtrl',
                templateUrl: 'views/register.html'
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
                    user: ['Restangular', '$stateParams', function(Restangular, $stateParams) {
                        return Restangular.one('users', $stateParams.userId).get();
                    }]
                },
                controller: 'ProjectsCtrl',
                templateUrl: 'views/projects.html'
            })
            .state('post', {
                url: '/posts/:postId',
                resolve: {
                    post: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('posts', $stateParams.postId).get();
                        }
                    ]
                },
                controller: 'SinglePostCtrl',
                templateUrl: 'views/singlepost.html'
            })
            .state('user.project', {
                url: '/projects/:projectId?timelapse',
                resolve: {
                    project: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId)
                            .one('projects', $stateParams.projectId).get();
                        }
                    ],
                    posts: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId)
                            .one('projects', $stateParams.projectId).all('posts').getList();
                        }
                    ]
                },
                controller: 'ProjectCtrl',
                templateUrl: 'views/project.html'
            })
            .state('user.diary', {
                url: '/diary/:projectId?timelapse',
                resolve: {
                    project: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId)
                            .one('projects', $stateParams.projectId).get();
                        }
                    ],
                    posts: ['Restangular', '$stateParams',
                        function(Restangular, $stateParams) {
                            return Restangular.one('users', $stateParams.userId)
                            .one('projects', $stateParams.projectId).all('posts').getList();
                        }
                    ]
                },
                controller: 'DiaryCtrl',
                templateUrl: 'views/diary.html'
            });
    });
