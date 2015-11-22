/* global Firebase */

(function () {
  'use strict';

  function degreeRequirementsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'degreeRequirements');

    return {
      getDegrees: function (callback) {
        ref.child('degrees').once('value', function (snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.degree-requirements', [])
    .factory('DegreeRequirementsService', degreeRequirementsService);
})();
