/* global Firebase */

(function () {
  'use strict';

  function companiesService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'companies');

    return {
      getCompanies: function (callback) {
        ref.child('companies').once('value' , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.companies', [])
    .factory('CompaniesService', companiesService);
})();
