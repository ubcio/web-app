(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.job-postings', {
        url: '/job-postings',
        views: {
          '@': {
            templateUrl: 'src/app/job-postings/job-postings.tpl.html',
            controller: 'JobPostingsCtrl as jobPostings'
          }
        }
      });
  }

  /**
   * @name  JobPostingsCtrl
   * @description Controller
   */
  function JobPostingsCtrl(JobPostingsService, $scope) {
    var jobPostings = this;

    var postInit = function (jobPostingsData) {
      jobPostings.jobPostings = jobPostingsData;
      jobPostings.loaded = true;
      $scope.$digest();
    };

    var init = function () {
      JobPostingsService.getJobPostings(postInit);
      jobPostings.sortType = "deadline";
      jobPostings.sortReverse = false;

      jobPostings.tableFilter = function (type, reverse) {
        jobPostings.sortType = type;
        jobPostings.sortReverse = reverse;
      };
    }();
  }

  angular.module('job-postings', [])
    .config(config)
    .controller('JobPostingsCtrl', JobPostingsCtrl);
})();
