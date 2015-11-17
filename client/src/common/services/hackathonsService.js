(function () {
  'use strict';

  function hackathonsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "hackathons");

    return {
      getHackathons: function () {
        return $firebaseArray(ref.child("hackathons"));
      }
    };
  }

  angular.module('common.services.hackathons', [])
    .factory('HackathonsService', hackathonsService);
})();
