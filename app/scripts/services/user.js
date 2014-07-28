'use strict';

angular.module('progressClientApp')
    .factory('User', function(Restangular) {

        var User = Restangular.service('users');

        User.getOnline = function() {
            return Restangular.one('me').all('following').all('online').getList();
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
