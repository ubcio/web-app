(function() {
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
  function TutorsCtrl(TutorsService) {
    var tutors = this;
    var init = function() {
      tutors.coursesWithTutors = TutorsService.getCoursesWithTutors();
      tutors.tutors = TutorsService.getTutors();
      tutors.selectedCourse = undefined;
      tutors.orderByDate = function(review) {
        return new Date(review.createDate);
      }
    }();
  }

  angular.module('tutors', [])
    .config(config)
    .controller('TutorsCtrl', TutorsCtrl);
})();
