(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.courses', {
        url: '/',
        templateUrl: 'src/app/courses/courses.tpl.html',
        controller: 'CoursesCtrl as courses'
      });
  }

  /**
   * @name  CoursesCtrl
   * @description Controller
   */
  function CoursesCtrl(CoursesService , $scope) {
    var courses = this;

    var postInitFailure = function() {
      courses.inputText = 'sorry could not load data';
    };

    var postInitSuccess = function (coursesData) {
      courses.inputText = 'enter a course name...';
      courses.courses = coursesData;
      courses.loaded = true;
      $scope.$applyAsync();
    };

    var init = function () {
      CoursesService.getCourses(postInitSuccess , postInitFailure);
      courses.loaded = false;
      courses.inputText = 'loading data...';
      courses.selectedCourse = undefined;
      courses.orderByDate = function (tip) {
        return new Date(tip.createDate);
      };
    };

    init();
  }

  angular.module('courses', [])
    .config(config)
    .controller('CoursesCtrl', CoursesCtrl);
})();
