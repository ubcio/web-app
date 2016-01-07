
(function () {
  'use strict';

  function degreeRequirementsService($http, DigitalOceanUrl) {

    return {
      getDegrees: function (callbackSuccess, callbackFailure) {
        $http({
          method: 'GET',
          url: DigitalOceanUrl + 'degreeRequirements'
        }).then (function successCallback(response){
          callbackSuccess(response.data);
        }, function errorCallback(response){
          console.log(response.data);
          callbackFailure();
        });
      }
    };
  }

  angular.module('common.services.degree-requirements', [])
    .factory('DegreeRequirementsService', degreeRequirementsService);
})();
