(function() {
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
  function JobPostingsCtrl(JobPostingsService) {
    var jobPostings = this;

    jobPostings.tableFilter = function(type , order){
      jobPostings.sortType = type;
      jobPostings.sortReverse = order;
    };

    var init = function() {
      jobPostings.jobPostings = JobPostingsService.getJobPostings();
      jobPostings.sortType = "deadline";
      jobPostings.sortReverse = false;
    }();
  }

  angular.module('job-postings', [])
    .config(config)
    .controller('JobPostingsCtrl', JobPostingsCtrl);
})();
