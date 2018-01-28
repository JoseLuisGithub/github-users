'use strict';
angular.module('github')
.controller('userRepoCtrl', ['$scope', '$location', 'providerService', 'SERVICE_URL',
  function ($scope, $location, providerService, baseUrl) {
    initController();

    //_Inits user controller repo data info.
    function initController() {
      var userRepoUrl = baseUrl + $location.path() + '/repos';
      providerService.getData(userRepoUrl)
      .then(successUserRepo)
      .catch(onError);
    }

    /**
     * _Gets the success result of user repo info request service.
     * @param result, user object populated with their list of his repos info.
     */
    function successUserRepo(result) {
      $scope.userRepo = result;
    }

    /**
    * _Request service failed.
    * @param error, Github service error.
    */
    function onError(error) {
      console.log('Error: ' + error);
    }

    $(document).ready(function() {
      setTimeout(function(){
        $('#example').DataTable(
          {
            "pageLength": 12,
            "bLengthChange": false
          }
        );
      }, 400);
    } );
}]);
