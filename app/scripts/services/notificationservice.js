'use strict';

angular.module('progressClientApp')
    .factory('notificationService', function(Restangular, Notification) {
        var service = {
            notifications: [],
            loadNotifications: loadNotifications,
            markAllAsRead: markAllAsRead
        };
        return service;

        function loadNotifications() {
            Notification.getNotifications().then(function(notifications) {
                service.notifications = notifications;
            });
        }

        function markAllAsRead() {
            _.each(service.notifications, function(notification) {
                notification.markAsRead();
            });
        }
    });
