'use strict';

angular.module('progressClientApp')
    .factory('Notification', function(Restangular, $rootScope, $log, $analytics) {
        var Notification = Restangular.service('notifications');
        Notification.getNotifications = getNotifications;
        
        Restangular.extendModel('notifications', function(notification) {
            notification.markAsRead = function() {
                notification.isread = 1;
                notification.save();
                $log.debug('Marking as read', notification);
                $analytics.eventTrack('notification-mark-as-read');
                $rootScope.notificationService.notifications = _.without($rootScope.notificationService.notifications, 
                    notification);
            };
            return notification;
        });

        return Notification;

        ////
        
        function getNotifications() {
            $log.debug('Getting notifications');
            return Restangular.one('me').all('notifications').getList();  
        }
    });
