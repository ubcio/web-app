(function () {
  'use strict';

  function coursesService($http , DigitalOceanUrl) {

    return {
      getCourses: function (callbackSuccess , callbackFailure) {
      $http({
        method: 'GET',
        url: DigitalOceanUrl + 'courses'
      }).then(function successCallback(response) {
          callbackSuccess(response.data);
        }, function errorCallback(response) {
          console.log(response.data);
          callbackFailure();
        });
      }
    };
  }

  angular.module('common.services.courses', [])
    .factory('CoursesService', coursesService);
})();
