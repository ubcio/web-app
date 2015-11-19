(function () {
  'use strict';

  function coursesService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + "courses");

    return {
      getCourses: function (callback) {
        ref.child("courses").once("value", function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.courses', [])
    .factory('CoursesService', coursesService);
})();
