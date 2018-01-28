'use strict';
var SERVICE = {
  GITHUB_API: 'api.github.com',
  PROTOCOL: 'https'
}
angular.module('github',
  ['ngCookies', 'ngSanitize', 'ngResource', 'ngRoute', 'directive'])
    .config(function ($routeProvider,$httpProvider, $locationProvider) {
      $routeProvider
      .when('/users', {
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .when('/users/:identifier', {
        templateUrl: 'app/views/githubUserRepo.html',
        controller: 'userRepoCtrl'
      })
      .otherwise({
        redirectTo: '/users'
      });
    });

angular.module('github').constant('SERVICE_URL', SERVICE.PROTOCOL + '://' + SERVICE.GITHUB_API);
angular.module('directive', []);
