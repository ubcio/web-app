(function() {
  'use strict';

  function degreeRequirementsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "degreeRequirements");

    return {
      getSpecificStartingPosition: function() {
        return 1840;
      },
      getGeneralStartingPosition: function() {
        return 350;
      },
      getDegrees: function() {
        return $firebaseArray(ref.child("degrees"));
      }
    };
  }

  angular.module('common.services.degree-requirements', [])
    .factory('DegreeRequirementsService', degreeRequirementsService);
})();
