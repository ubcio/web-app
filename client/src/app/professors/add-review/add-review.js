(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-professors.add-review', {
        url: "/professors/add-review",
        templateUrl: 'src/app/professors/add-review/add-review.tpl.html',
        controller: 'AddReviewProfessorsCtrl as addReview'
        }
      );
  }

  /**
   * @name  AddReviewProfessorsCtrl
   * @description Controller
   */
  function AddReviewProfessorsCtrl() {
    var addReview = this;

    addReview.submitReview = function() {
      // TODO Post Request to API
    };

  }

  angular.module('professors.add-review', [])
    .config(config)
    .controller('AddReviewProfessorsCtrl', AddReviewProfessorsCtrl);
})();
