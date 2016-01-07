(function () {
  'use strict';

  function professorsService($http , DigitalOceanUrl) {

    return {
      getProfessors: function (callbackSuccess , callbackFailure) {
        $http({
          method: 'GET',
          url: DigitalOceanUrl + 'professors'
        }).then(function successCallback(response) {
          callbackSuccess(response.data);
        }, function errorCallback(response) {
          console.log(response.data);
          callbackFailure();
        });
      }
    };
  }

  angular.module('common.services.professors', [])
    .factory('ProfessorsService', professorsService);
})();
