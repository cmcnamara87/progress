'use strict';

angular.module('progressClientApp')
    .factory('Post', function(Restangular, $rootScope, $log, $analytics) {

        var Post = Restangular.service('posts');

        Post.getFeed = function() {
            $log.debug('getting feed');
            return Restangular.one('me').all('following').all('posts').getList();
        };

        Restangular.extendModel('posts', function(post) {
            $log.debug('wrapping post');
            post.comments = post.comments || [];
            _.each(post.comments, function(comment) {
                comment.user = comment.user || {};
                comment.user.color = '#'+Math.floor(Math.random()*16777215).toString(16);
            });
            post.isLiked = false;
            post.isOwner = false;
            var stopListening = $rootScope.$watch('currentUser', function(currentUser) {
                // var newlyLoggedIn = currentUser && !old;
                if(currentUser) {
                    var like = _.findWhere(post.likes, {'user_id': $rootScope.currentUser.id});
                    if(like) {
                        post.isLiked = true;
                    }
                    if(post.user_id === currentUser.id) {
                        post.isOwner = true;
                    }
                    stopListening();
                }
            });

            post.delete = function(posts) {
                $analytics.eventTrack('post-delete', {category: 'post'});
                Restangular.one('me').one('posts', post.id).remove();
                if(posts) {
                    // remove it from the list
                    var index = posts.indexOf(post);
                    posts.splice(index, 1);
                }
            };

            post.addComment = function(comment) {
                $analytics.eventTrack('comment-add', {category: 'comment'});
                Restangular.one('me').one('posts', post.id).all('comments').post(comment).then(function(savedComment) {
                    _.extend(comment, savedComment);
                });

                

                if($rootScope.currentUser) {
                    comment.user = $rootScope.currentUser;
                }
                post.comments.push(comment);
                
                post.$comment = {};
            };
            
            post.toggleLike = function() {
                $analytics.eventTrack('post-like', {category: 'post'});
                var likeTemp = {};
                if($rootScope.currentUser) {
                    likeTemp.user_id = $rootScope.currentUser.id;
                    likeTemp.user = $rootScope.currentUser;
                }
                post.isLiked = true;
                post.likes.push(likeTemp);
                Restangular.one('me').one('posts', post.id).all('likes').post().then(function(like) {
                    _.extend(likeTemp, like);
                }, function() {
                });
            };
            return post;
        });

        return Post;
    });
