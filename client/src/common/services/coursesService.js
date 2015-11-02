(function () {
  'use strict';

  function coursesService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "courses");

    return {
      getCourses: function () {
        return $firebaseArray(ref.child("courses"));
      }
    };
  }

  angular.module('common.services.courses', [])
    .factory('CoursesService', coursesService);
})();
