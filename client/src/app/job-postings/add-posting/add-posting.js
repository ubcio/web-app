(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-job-postings.add-posting', {
        url: "/job-postings/add-posting",
        templateUrl: 'src/app/job-postings/add-posting/add-posting.tpl.html',
        controller: 'AddPostingJobPostingsCtrl as addPosting'
        }
      );
  }

  /**
   * @name  AddPostingJobPostingsCtrl
   * @description Controller
   */
  function AddPostingJobPostingsCtrl() {
    var addPosting = this;

    addPosting.submitPosting = function() {
      // TODO Post Request to API
    };

  }

  angular.module('job-postings.add-posting', [])
    .config(config)
    .controller('AddPostingJobPostingsCtrl', AddPostingJobPostingsCtrl);
})();
