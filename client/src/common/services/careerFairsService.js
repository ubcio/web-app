(function () {
  'use strict';

  function careerFairsService(FirebaseUrl, $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "careerFairs");

    return {
      getCareerFairs: function () {
        return $firebaseArray(ref.child("careerFairs"));
      }
    };
  }

  angular.module('common.services.career-fairs', [])
    .factory('CareerFairsService', careerFairsService);
})();
