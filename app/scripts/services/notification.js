'use strict';

angular.module('progressClientApp')
    .factory('Notification', function(Restangular) {
        var Notification = Restangular.service('notifications');
        return Notification;

        /////
        
        
    });
