'use strict';
/**
 * @ngdoc overview
 * @name tnblFireApp:routes
 * @description
 * # routes.js
 *
 * Configure routes for use with Angular, and apply authentication security
 */
angular.module('tnblFireApp')

  .config(['$routeProvider', function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })

      .when('/chat', {
        templateUrl: 'views/chat.html',
        controller: 'ChatCtrl'
      })
      .when('/configs', {
        templateUrl: 'views/configs.html',
        controller: 'ConfigsCtrl'
      })
      .otherwise({redirectTo: '/'});
  }]);
