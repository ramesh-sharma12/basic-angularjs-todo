'use strict';

var todoApp = angular
  .module('todoApp', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/home', {
      templateUrl: 'app/views/main.html',
      controller: 'TodoMainCtrl'
    })
      .when('/todo', {
        templateUrl: 'app/views/todo.html',
        controller: 'TodoMainCtrl'
      })
      .when('/todo/edit/:id', {
        templateUrl: 'app/views/edit.html',
        controller: 'TodoEditCtrl'
      })
      .otherwise({redirectTo: '/home'});

      $locationProvider.html5Mode(true);
  });
