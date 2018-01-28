'use strict';
angular.module('github')
.controller('MainCtrl', ['$scope', '$location', 'userListService', 'providerService',
  function ($scope, $location, userListService, providerService) {
    //_Github list users.
    userListService.query(onSuccess, onError);
    $scope.userdata = [];

    $scope.loadUserRepo = function (user) {
      var newLocation= {
        currentPath: $location.path(),
        identifier: user.login
      }
      engineLocation(newLocation);
    }

    function engineLocation (resource) {
      $location.path(resource.currentPath + '/' + resource.identifier);
      $location.replace();
    }

    /**
     * _Request service successful.
     * @param result, users array on Github.
     */
    function onSuccess(result) {
      $scope.listUsers = result;
      result.forEach(function(element) {
        getPersonalUserData(element);
      });
    }

    /**
     * _Gets the user personal info making a request service.
     * @param result, Github service error.
     */
    function getPersonalUserData (userUrlData) {
      // console.log(userUrlData);
      providerService.getData(userUrlData.url)
      .then(successUserData)
      .catch(onError);
    }

    /**
     * _Gets the success result of user personal info request service.
     * @param result, user object populated with their own info.
     */
    function successUserData(result) {
      $scope.userdata.push(result)
    }

    /**
    * _Request service failed.
    * @param error, Github service error.
    */
    function onError(error) {
      console.log('Error: ' + error);
    }
}]);
