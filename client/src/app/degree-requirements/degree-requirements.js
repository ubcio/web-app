(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.degree-requirements', {
        url: '/degree-requirements',
        views: {
          '@': {
            templateUrl: 'src/app/degree-requirements/degree-requirements.tpl.html',
            controller: 'DegreeRequirementsCtrl as degreeRequirements'
          }
        }
      });
  }

  /**
   * @name  DegreeRequirementsCtrl
   * @description Controller
   */
  function DegreeRequirementsCtrl(DegreeRequirementsService , $scope) {
    var degreeRequirements = this;

    var postInit = function(degreeData) {
      degreeRequirements.degrees = degreeData;
      degreeRequirements.loaded = true;
      degreeRequirements.inputText = 'enter your degree name...';
      $scope.$applyAsync();
    };

    var init = function () {
      DegreeRequirementsService.getDegrees(postInit);
      degreeRequirements.loaded = false;
      degreeRequirements.inputText = 'loading data...';
    };

    init();
  }

  angular.module('degree-requirements', [])
    .config(config)
    .controller('DegreeRequirementsCtrl', DegreeRequirementsCtrl);
})();
