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
        templateUrl: 'src/common/header/header.tpl.html',
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
      'courses.add-review',
      'courses.add-tip',
      'professors',
      'professors.add-review',
      'tutors',
      'tutors.offer-service',
      'degree-requirements',
      'resume-and-cover-letter',
      'training-for-interviews',
      'career-fairs',
      'job-postings',
      'job-postings.add-posting',
      'seminars',
      'hackathons',
      'the-project',
      'the-team',
      'companies',
      'companies.add-review',
      'common.header',
      'common.career-fairs.sub-bar',
      'common.companies.sub-bar',
      'common.courses.sub-bar',
      'common.degree-requirements.sub-bar',
      'common.hackathons.sub-bar',
      'common.job-postings.sub-bar',
      'common.professors.sub-bar',
      'common.resume-and-cover-letter.sub-bar',
      'common.seminars.sub-bar',
      'common.the-project.sub-bar',
      'common.the-team.sub-bar',
      'common.training-for-interviews.sub-bar',
      'common.tutors.sub-bar',
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
