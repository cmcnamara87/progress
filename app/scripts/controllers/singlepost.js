'use strict';

angular.module('progressClientApp')
    .controller('SinglePostCtrl', function($scope, post) {
        $scope.post = post;
    });
