(function () {
  'use strict';

  function professorsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + "professors");

    return {
      getProfessors: function (callback) {
        ref.child("professors").once("value" , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.professors', [])
    .factory('ProfessorsService', professorsService);
})();
