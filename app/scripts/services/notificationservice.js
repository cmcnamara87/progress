'use strict';

angular.module('progressClientApp')
    .factory('notificationService', function(Restangular, Notification) {
        var service = {
            notifications: [],
            loadNotifications: loadNotifications
        };
        return service;

        function loadNotifications() {
            Notification.getNotifications().then(function(notifications) {
                service.notifications = notifications;
            });
        }
    });
