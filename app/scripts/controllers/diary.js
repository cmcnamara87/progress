'use strict';

angular.module('progressClientApp')
    .controller('DiaryCtrl', function($scope, $filter, project, posts, Restangular, User) {
        var vm = $scope;
        vm.entires = null;
        vm.project = project;
        vm.posts = posts;

        // _.each(posts, function(post) {
            _.each(project.directories, function(directory) {
                console.log('directories');
                var parts = directory.path.split('/');
                directory.folderName = parts[parts.length - 1];
            });
        // });

        // Only screenshots
        vm.posts = _.filter(posts, function(post) {
            return post.type === 'SCREENSHOT_COLLECTION';
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
		vm.dates = _.sortBy(dates, 'created').reverse();


        User.getLoggedIn();
    });
