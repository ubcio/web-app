(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-career-fairs.add-fair', {
        url: "/career-fairs/add-fair",
        templateUrl: 'src/app/career-fairs/add-fair/add-fair.tpl.html',
        controller: 'AddFairCareerFairsCtrl as addFair'
        }
      );
  }

  /**
   * @name  AddFairCareerFairsCtrl
   * @description Controller
   */
  function AddFairCareerFairsCtrl() {
    var addFair = this;

    addFair.submitCareerFair = function() {
      // TODO Post Request to API
    };

  }

  angular.module('career-fairs.add-fair', [])
    .config(config)
    .controller('AddFairCareerFairsCtrl', AddFairCareerFairsCtrl);
})();
