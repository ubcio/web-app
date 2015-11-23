(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.tutors', {
        url: '/tutors',
        views: {
          '@': {
            templateUrl: 'src/app/tutors/tutors.tpl.html',
            controller: 'TutorsCtrl as tutors'
          }
        }
      });
  }

  /**
   * @name  TutorsCtrl
   * @description Controller
   */
  function TutorsCtrl(TutorsService, $scope) {
    var tutors = this;

    var postInit = function (tutorsData) {
      if (tutorsData !== null) {
        tutors.courses = tutorsData.courses;
        tutors.tutors = tutorsData.tutors;
      }
      tutors.loaded = true;
      tutors.inputText = 'enter a course name...';
      $scope.$applyAsync();
    };

    var init = function () {
      TutorsService.getTutors(postInit);
      tutors.loaded = false;
      tutors.inputText = 'loading data...';
      tutors.selectedCourse = undefined;
      tutors.orderByDate = function (review) {
        return new Date(review.createDate);
      };
    };

    init();
  }

  angular.module('tutors', [])
    .config(config)
    .controller('TutorsCtrl', TutorsCtrl);
})();
