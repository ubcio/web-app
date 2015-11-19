(function () {
  'use strict';

  function careerFairsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + "careerFairs");

    return {
      getCareerFairs: function (callback) {
        ref.child("careerFairs").once("value" , function(snapshot){
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.career-fairs', [])
    .factory('CareerFairsService', careerFairsService);
})();
