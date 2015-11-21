/* global Firebase */

(function () {
  'use strict';

  function jobPostingsService(FirebaseUrl) {
    var ref = new Firebase(FirebaseUrl + 'jobPostings');

    return {
      getJobPostings: function (callback) {
        ref.child('jobPostings').once('value' , function(snapshot) {
          callback(snapshot.val());
        });
      }
    };
  }

  angular.module('common.services.job-postings', [])
    .factory('JobPostingsService', jobPostingsService);
})();
