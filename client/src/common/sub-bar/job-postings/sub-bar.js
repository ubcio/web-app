(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-job-postings', {
          templateUrl: 'src/common/sub-bar/job-postings/sub-bar.tpl.html',
          controller: 'SubBarJobPostingsCtrl as subBar',
          abstract: true
        });
  }


  function subBarJobPostingsCtrl() {

  }

  angular.module('common.job-postings.sub-bar', [])
    .config(config)
    .controller('SubBarJobPostingsCtrl', subBarJobPostingsCtrl);
})();
