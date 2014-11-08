'use strict';

angular.module('progressClientApp')
    .factory('notificationService', function(Restangular, Notification, $analytics) {
        var service = {
            notifications: [],
            loadNotifications: loadNotifications,
            markAllAsRead: markAllAsRead,
            markAsRead: markAsRead,
            unreadCount: 0,
            hasUnread: false
        };
        return service;

        function loadNotifications() {
            Notification.getNotifications().then(function(notifications) {
                service.notifications = notifications;
                service.hasUnread = !!_.find(notifications, {isread: 0});
                service.unreadCount = _.filter(notifications, {isread: 0}).length;
            });
        }

        function markAsRead(notification) {
            notification.markAsRead();
            service.hasUnread = !!_.find(service.notifications, {isread: 0});
            service.unreadCount = _.filter(service.notifications, {isread: 0}).length;
        }

        function markAllAsRead() {
            $analytics.eventTrack('notification-mark-all-as-read');
            _.each(service.notifications, function(notification) {
                notification.markAsRead();
            });
            service.hasUnread = !!_.find(service.notifications, {isread: 0});
            service.unreadCount = _.filter(service.notifications, {isread: 0}).length;
        }
    });
