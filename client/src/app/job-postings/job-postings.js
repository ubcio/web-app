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
  function JobPostingsCtrl() {
    var jobPostings = this;
  }

  angular.module('job-postings', [])
    .config(config)
    .controller('JobPostingsCtrl', JobPostingsCtrl);
})();
