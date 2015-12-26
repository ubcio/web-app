(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar.resume-and-cover-letter', {
        url: '/resume-and-cover-letter',
        templateUrl: 'src/app/resume-and-cover-letter/resume-and-cover-letter.tpl.html',
        controller: 'ResumeAndCoverLetterCtrl as resumeAndCoverLetter'
      });
  }

  /**
   * @name  ResumeAndCoverLetterCtrl
   * @description Controller
   */
  function ResumeAndCoverLetterCtrl() { }

  angular.module('resume-and-cover-letter', [])
    .config(config)
    .controller('ResumeAndCoverLetterCtrl', ResumeAndCoverLetterCtrl);
})();
