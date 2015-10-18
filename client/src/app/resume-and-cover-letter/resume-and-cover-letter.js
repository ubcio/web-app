(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.resume-and-cover-letter', {
        url: '/resume-and-cover-letter',
        views: {
          '@': {
            templateUrl: 'src/app/resume-and-cover-letter/resume-and-cover-letter.tpl.html',
            controller: 'ResumeAndCoverLetterCtrl as resumeAndCoverLetter'
          }
        }
      });
  }

  /**
   * @name  ResumeAndCoverLetterCtrl
   * @description Controller
   */
  function ResumeAndCoverLetterCtrl() {
    var resumeAndCoverLetter = this;
  }

  angular.module('resume-and-cover-letter', [])
    .config(config)
    .controller('ResumeAndCoverLetterCtrl', ResumeAndCoverLetterCtrl);
})();
