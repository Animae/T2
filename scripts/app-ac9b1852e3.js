"use strict";angular.module("site",["ui.router","ui.bootstrap"]).config(["$stateProvider","$urlRouterProvider",function(t,e){t.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainCtrl"}),e.otherwise("/")}]),angular.module("site").controller("MainCtrl",["$scope",function(t){t.awesomeThings=[]}]),angular.module("site").run(["$templateCache",function(t){t.put("app/main/main.html",'<div class="container">T2: Master of Timing</div>')}]);