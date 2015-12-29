(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-companies.add-review', {
        url: "/companies/add-review",
        templateUrl: 'src/app/companies/add-review/add-review.tpl.html',
        controller: 'AddReviewCompaniesCtrl as addReview'
        }
      );
  }

  /**
   * @name  AddReviewCompaniesCtrl
   * @description Controller
   */
  function AddReviewCompaniesCtrl() {
    var addReview = this;

    addReview.submitReview = function() {
      // TODO Post Request to API
    };

  }

  angular.module('companies.add-review', [])
    .config(config)
    .controller('AddReviewCompaniesCtrl', AddReviewCompaniesCtrl);
})();
