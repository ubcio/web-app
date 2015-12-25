(function() {
  'use strict';

  angular.element(document).ready(function() {
    angular.bootstrap(document, ['app']);
  });

  function config($stateProvider, $urlRouterProvider, $logProvider, $httpProvider , $sceDelegateProvider) {
    $sceDelegateProvider.resourceUrlWhitelist([
      // Allow same origin resource loads.
      'self',
      'http://www.calendar.ubc.ca/**'
    ]);

    $urlRouterProvider.otherwise('app/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        url: '/app',
        templateUrl: 'src/common/header.tpl.html',
        controller: 'HeaderCtrl as header',
        abstract: true
      });
  }

  function MainCtrl($log) {
    $log.debug('MainCtrl laoded!');
  }

  function run($log) {
    $log.debug('App is running!');
  }

  angular.module('app', [
      'ui.router',
      'firebase',
      'ui.bootstrap',
      'courses',
      'professors',
      'tutors',
      'degree-requirements',
      'resume-and-cover-letter',
      'training-for-interviews',
      'career-fairs',
      'job-postings',
      'seminars',
      'hackathons',
      'the-project',
      'the-team',
      'companies',
      'common.header',
      'common.services.degree-requirements',
      'common.services.tutors',
      'common.services.courses',
      'common.services.professors',
      'common.services.seminars',
      'common.services.hackathons',
      'common.services.career-fairs',
      'common.services.job-postings',
      'common.services.companies',
      'common.services.the-team',
      'common.directives.version',
      'common.filters.uppercase',
      'common.interceptors.http',
      'templates',
      'ngMdIcons'
    ])
    .config(config)
    .run(run)
    .controller('MainCtrl', MainCtrl)
    .constant('FirebaseUrl', 'https://ubcio.firebaseio.com/')
    .value('version', '1.1.0');
})();
