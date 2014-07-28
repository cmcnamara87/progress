'use strict';

angular.module('progressClientApp')
    .directive('post', function() {
        return {
            templateUrl: 'views/post.html',
            restrict: 'E',
            link: function postLink() {}
        };
    });
