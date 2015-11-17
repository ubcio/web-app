(function() {
  'use strict';

  function degreeRequirementsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "degreeRequirements");

    return {
      getDegrees: function() {
        return $firebaseArray(ref.child("degrees"));
      }
    };
  }

  angular.module('common.services.degree-requirements', [])
    .factory('DegreeRequirementsService', degreeRequirementsService);
})();
