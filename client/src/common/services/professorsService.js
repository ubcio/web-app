(function () {
  'use strict';

  function professorsService() {

    return {
      getProfessors: function () {
        return [
          {
            name: "Paul Carter",
            bio: "Cool prof as well",
            reviews: [
              "Dope Prof",
              "Really dope"
            ]
          },
          {
            name: "Ron Garcia",
            bio: "Cool prof",
            reviews: [

            ]
          }
        ];
      }
    };
  }

  angular.module('common.services.professors', [])
    .factory('ProfessorsService', professorsService);
})();
