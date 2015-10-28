(function () {
  'use strict';

  function coursesService() {

    return {
      getCourses: function () {
        return [
          {
            name: "CS 110",
            description: "Shitty",
            credits: 3,
            prerequisites: []
          },
          {
            name: "CS 121",
            description: "Meh",
            credits: 3,
            prerequisites: []
          },
          {
            name: "CS 210",
            description: "ohh yaaa",
            credits: 3,
            prerequisites: [
              "CS110",
              "CS121"
            ]
          }
        ];
      }
    };
  }

  angular.module('common.services.courses', [])
    .factory('CoursesService', coursesService);
})();
