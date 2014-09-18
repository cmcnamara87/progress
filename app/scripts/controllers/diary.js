'use strict';

angular.module('progressClientApp')
    .controller('DiaryCtrl', function($scope, $filter, project, posts, Restangular, User) {
        var vm = $scope;
        vm.entires = null;
        vm.project = project;
        vm.posts = posts;

        _.each(project.directories, function(directory) {
            console.log('directories');
            var parts = directory.path.split('/');
            directory.folderName = parts[parts.length - 1];
        });

        // Only screenshots
        vm.posts = _.filter(posts, function(post) {
            return post.type === 'SCREENSHOT_COLLECTION' || post.type === 'TEXT' || post.type === 'STARTED_WORKING';
        }).reverse();

        _.each(vm.posts, function(post) {
            post.date = $filter('date')(post.created * 1000, 'fullDate');
        });

        var dates = _.groupBy(vm.posts, 'date');
        dates = _.map(dates, function(date) {
            return {
                date: date[0].date,
                created: date[0].created,
                entries: date
            };
        });
        _.each(dates, function(date) {
            date.entries = _.reject(date.entries, {type: 'STARTED_WORKING'});
        });
        vm.dates = _.sortBy(dates, 'created').reverse();
    });
