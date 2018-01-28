'use strict';
angular.module('github')
.controller('MainCtrl', ['$scope', '$rootScope', 'userListService', 'providerService',
  function ($scope, $rootScope, userListService, providerService) {
    //_Github list users.
    userListService.query(onSuccess, onError);
    $scope.userdata = [];

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
    * @param result, Github service error.
    */
    function onError(error) {
      console.log('Error: ' + error);
    }
}]);
