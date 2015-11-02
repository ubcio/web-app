(function () {
  'use strict';

  function tutorsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "tutors");


    return {
      getCoursesWithTutors: function () {
        return $firebaseArray(ref.child("courses"));
      },
      getTutors: function(){
        return $firebaseArray(ref.child("tutors"));
      }
    };
  }

  angular.module('common.services.tutors', [])
    .factory('TutorsService', tutorsService);
})();
