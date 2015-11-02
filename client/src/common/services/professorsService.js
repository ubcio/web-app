(function () {
  'use strict';

  function professorsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "professors");

    return {
      getProfessors: function () {
        return $firebaseArray(ref.child("professors"));
      }
    };
  }

  angular.module('common.services.professors', [])
    .factory('ProfessorsService', professorsService);
})();
