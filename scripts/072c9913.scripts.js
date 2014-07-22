"use strict";angular.module("progressClientApp",["ngCookies","ngSanitize","ui.router","restangular","angularMoment","cgBusy"]).value("cgBusyDefaults",{message:"Loading"}).config(["$stateProvider","$urlRouterProvider","RestangularProvider",function(a,b,c){c.setBaseUrl("http://ec2-54-206-66-123.ap-southeast-2.compute.amazonaws.com/progress/api/index.php"),c.setDefaultHttpFields({withCredentials:!0}),b.otherwise("/"),a.state("home",{url:"/",controller:"FeedCtrl",templateUrl:"views/feed.html"}).state("user",{"abstract":!0,url:"/users/:userId",template:"<ui-view></ui-view>"}).state("user.projects",{url:"/projects",resolve:{projects:["Restangular","$stateParams",function(a,b){return a.one("users",b.userId).all("projects").getList()}]},controller:"ProjectsCtrl",templateUrl:"views/projects.html"}).state("user.project",{url:"/projects/:projectId",resolve:{project:["Restangular","$stateParams",function(a,b){return a.one("users",b.userId).one("projects",b.projectId).get()}],posts:["Restangular","$stateParams",function(a,b){return a.one("users",b.userId).one("projects",b.projectId).all("posts").getList()}]},controller:"ProjectCtrl",templateUrl:"views/project.html"})}]),angular.module("progressClientApp").controller("MainCtrl",["$scope",function(a){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}]),angular.module("progressClientApp").controller("ProjectsCtrl",["$scope","projects",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.projects=b}]),angular.module("progressClientApp").controller("ProjectCtrl",["$scope","project","posts",function(a,b,c){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.project=b,a.posts=c}]),angular.module("progressClientApp").controller("FeedCtrl",["$scope","Restangular",function(a,b){a.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"],a.posts=b.one("me").all("following").all("posts").getList(),a.online=b.one("me").all("following").all("online").getList()}]),angular.module("progressClientApp").directive("post",function(){return{templateUrl:"views/post.html",restrict:"E",link:function(){}}});