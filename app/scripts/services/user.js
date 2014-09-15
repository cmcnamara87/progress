'use strict';

angular.module('progressClientApp')
    .factory('User', function(Restangular, $rootScope) {

        var User = Restangular.service('users');

        User.getOnline = function() {
            return Restangular.one('me').all('following').all('online').getList();
        };

        User.getLoggedIn = function() {
            return Restangular.one('session').one('user').get().then(function(currentUser) {
                $rootScope.currentUser = currentUser;
                return currentUser;
            }, function() {
                return null;
            });
        };

        User.logout = function() {
            Restangular.all('users').all('logout').post();
            $rootScope.currentUser = null;
        };

        Restangular.extendModel('users', function(model) {
            // model.getResult = function() {
            //     if (this.status == 'complete') {
            //         if (this.passed === null) return "Finished";
            //         else if (this.passed === true) return "Pass";
            //         else if (this.passed === false) return "Fail";
            //     } else return "Running";
            // };
            return model;
        });

        return User;
    });
