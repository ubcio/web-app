/* global Firebase */

(function () {
  'use strict';

  function hackathonsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'hackathons');

    return {
      getHackathons: function (callback) {
        ref.child('hackathons').once('value' , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.hackathons', [])
    .factory('HackathonsService', hackathonsService);
})();
