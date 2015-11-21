/* global Firebase */

(function () {
  'use strict';

  function tutorsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'tutors');

    return {
      getTutors: function (callback) {
        ref.once('value' , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.tutors', [])
    .factory('TutorsService', tutorsService);
})();
