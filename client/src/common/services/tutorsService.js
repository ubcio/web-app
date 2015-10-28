(function () {
  'use strict';

  function tutorsService() {
    var arieMilner = {
      name: "Arie Milner",
      bio: "likes to code",
      price: 20
    };

    var banafshehDerayat = {
      name: "Banafsheh Derayat",
      bio: "Sexy mama",
      price:100
    };

    var timeh = {
      name: "Timeh",
      bio: "tiny timeh",
      price: -100
    }

    return {
      getCoursesWithTutors: function () {
        return [
          {
            courseName: "CS 110",
            tutors: [
              arieMilner,
              banafshehDerayat,
              timeh
            ]
          },
          {
            courseName: "CS 121",
            tutors:[
              arieMilner
            ]
          },
          {
            courseName: "CS 210",
            tutors:[
              timeh
            ]
          }
        ];
      }
    };
  }

  angular.module('common.services.tutors', [])
    .factory('TutorsService', tutorsService);
})();
