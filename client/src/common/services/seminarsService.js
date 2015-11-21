/* global Firebase */

(function () {
  'use strict';

  function seminarsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'seminars');


    return {
      getSeminars: function(callback){
        ref.child('seminars').once('value' , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.seminars', [])
    .factory('SeminarsService', seminarsService);
})();
