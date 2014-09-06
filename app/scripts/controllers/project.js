'use strict';

angular.module('progressClientApp')
    .controller('ProjectCtrl', function($scope, $interval, project, posts) {
        $scope.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];
        $scope.project = project;
        $scope.posts = posts;
        console.log('posts', posts);
        $scope.postsWithImages = _.filter(posts, function(post) {
            return post.type === 'SCREENSHOT_COLLECTION';
        }).reverse();
        $scope.timelapsePostIndex = 0;
        $scope.timelapsePost = $scope.postsWithImages[$scope.timelapsePostIndex++] || null;
        $scope.restart = restart;
        //////
        $interval(function() {
            if($scope.timelapsePostIndex !== $scope.postsWithImages.length) {
                var nextIndex = $scope.timelapsePostIndex++ % $scope.postsWithImages.length;
                $scope.timelapsePost = $scope.postsWithImages[nextIndex];
            }
        }, 500);
        function restart() {
            $scope.timelapsePostIndex = 0;
        }
    });
