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

    $urlRouterProvider.otherwise('/');
    $logProvider.debugEnabled(true);
    $httpProvider.interceptors.push('httpInterceptor');
    $stateProvider
      .state('root', {
        views: {
          'header': {
            templateUrl: 'src/common/header.tpl.html',
            controller: 'HeaderCtrl as header'
          }
        }
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
      'about',
      'companies',
      'common.header',
      'common.services.degree-requirements',
      'common.services.tutors',
      'common.services.courses',
      'common.services.professors',
      'common.services.seminars',
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
