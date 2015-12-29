(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-courses.add-review', {
        url: "/courses/add-review",
        templateUrl: 'src/app/courses/add-review/add-review.tpl.html',
        controller: 'AddReviewCoursesCtrl as addReview'
        }
      );
  }

  /**
   * @name  AddReviewCoursesCtrl
   * @description Controller
   */
  function AddReviewCoursesCtrl() {
    var addReview = this;

    addReview.submitReview = function() {
      // TODO Post Request to API
    };

  }

  angular.module('courses.add-review', [])
    .config(config)
    .controller('AddReviewCoursesCtrl', AddReviewCoursesCtrl);
})();
