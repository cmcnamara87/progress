'use strict';

angular.module('progressClientApp')
    .controller('RegisterCtrl', function($scope, Restangular, $rootScope, $state) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        $scope.register = function(user) {
            Restangular.all('users').all('register').post(user).then(function(user) {
                $rootScope.currentUser = user;
                $state.go('me.feed');
            });
        };
    });
