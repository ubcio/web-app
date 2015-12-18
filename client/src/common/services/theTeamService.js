/* global Firebase */

(function () {
  'use strict';

  function theTeamService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'theTeam');

    return {
      getTheTeam: function (callback) {
        ref.once('value' , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.the-team', [])
    .factory('TheTeamService', theTeamService);
})();
