(function () {
  'use strict';

  function companiesService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "companies");

    return {
      getCompanies: function () {
        return $firebaseArray(ref.child("companies"));
      }
    };
  }

  angular.module('common.services.companies', [])
    .factory('CompaniesService', companiesService);
})();
