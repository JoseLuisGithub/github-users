'use strict';
angular.module('github')
.controller('MainCtrl', ['$scope', 'userListService',
  function ($scope, userListService) {
    //_Github list users.
    userListService.query(onSuccess, onError);

    /**
     * _Request service successful.
     * @param result, users array on Github.
     */
    function onSuccess(result) {
      $scope.users = result;
    }

    /**
     * _Request service failed.
     * @param result, Github service error.
     */
    function onError(error) {
      console.log('Error: ' + error);
    }
  }]);
