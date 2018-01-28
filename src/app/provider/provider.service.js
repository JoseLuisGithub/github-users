'use strict'
/**
 * _Gets services by any engine url.
 * @param result, users array on Github.
 */
angular.module('github').factory('providerService',
['$http', '$q', function ($http, $q) {
  return {
    getData: function (url) {
      var defer = $q.defer();
      $http.get(url)
        .success(function(result) {
          defer.resolve(result);
        })
        .error(function() {
          defer.reject('Request info failed.');
        });
      return defer.promise;
    }
  };
}]);
