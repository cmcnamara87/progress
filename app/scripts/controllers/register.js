'use strict';

angular.module('progressClientApp')
    .controller('RegisterCtrl', function($scope, Restangular, $rootScope, $state) {
        $scope.isRegistering = false;

        $scope.register = function(user) {
            $scope.isRegistering = true;
            Restangular.all('users').all('register').post(user).then(function(user) {
                $rootScope.currentUser = user;
                $state.go('intro');
            });
        };
    });
