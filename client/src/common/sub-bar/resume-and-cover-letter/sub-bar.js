(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-resume-and-cover-letter', {
          templateUrl: 'src/common/sub-bar/resume-and-cover-letter/sub-bar.tpl.html',
          controller: 'SubBarResumeAndCoverLetterCtrl as subBar',
          abstract: true
        });
  }


  function subBarResumeAndCoverLetterCtrl() {

  }

  angular.module('common.resume-and-cover-letter.sub-bar', [])
    .config(config)
    .controller('SubBarResumeAndCoverLetterCtrl', subBarResumeAndCoverLetterCtrl);
})();
