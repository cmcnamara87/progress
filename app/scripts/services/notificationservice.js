'use strict';

angular.module('progressClientApp')
    .factory('notificationService', function(Restangular) {
        var service = {
            notifications: [],
            loadNotifications: loadNotifications
        };
        return service;

        function loadNotifications() {
            return Restangular.one('me').all('notifications').getList().then(function(notifications) {
                service.notifications = notifications;
            });
        }
    });
