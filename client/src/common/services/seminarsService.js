(function () {
  'use strict';

  function seminarsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "seminars");


    return {
      getSeminars: function(){
        return $firebaseArray(ref.child("seminars"));
      }
    };
  }

  angular.module('common.services.seminars', [])
    .factory('SeminarsService', seminarsService);
})();
