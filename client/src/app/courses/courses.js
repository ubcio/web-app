(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.courses', {
        url: '/',
        views: {
          '@': {
            templateUrl: 'src/app/courses/courses.tpl.html',
            controller: 'CoursesCtrl as courses'
          }
        }
      });
  }

  /**
   * @name  CoursesCtrl
   * @description Controller
   */
  function CoursesCtrl() {
    var courses = this;
  }

  angular.module('courses', [])
    .config(config)
    .controller('CoursesCtrl', CoursesCtrl);
})();
