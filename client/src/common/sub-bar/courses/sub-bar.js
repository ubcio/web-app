(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-courses', {
          templateUrl: 'src/common/sub-bar/courses/sub-bar.tpl.html',
          controller: 'SubBarCoursesCtrl as subBar',
          abstract: true
        });
  }


  function subBarCoursesCtrl() {

  }

  angular.module('common.courses.sub-bar', [])
    .config(config)
    .controller('SubBarCoursesCtrl', subBarCoursesCtrl);
})();
