'use strict';
// RESTAPI PROJECT
angular.module('github').factory('userListService', ['$resource', 'SERVICE_URL', function($resource, baseUrl) {
  return $resource(baseUrl + 'users',
    {
      get: {
        method: 'GET'
      }
    }
  );
}]);
