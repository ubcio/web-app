(function () {
  'use strict';

  function jobPostingsService(FirebaseUrl , $firebaseArray) {
    var ref = new Firebase(FirebaseUrl + "jobPostings");

    return {
      getJobPostings: function () {
        return $firebaseArray(ref.child("jobPostings"));
      }
    };
  }

  angular.module('common.services.job-postings', [])
    .factory('JobPostingsService', jobPostingsService);
})();
