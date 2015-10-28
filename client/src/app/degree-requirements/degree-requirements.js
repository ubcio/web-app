(function() {
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
  function DegreeRequirementsCtrl(DegreeRequirementsService) {
    var degreeRequirements = this;
    var frameWrapper = document.getElementById('specificFrameWrapper');

    var init = function() {
      frameWrapper.scrollTop = DegreeRequirementsService.getSpecificStartingPosition();
      document.getElementById('generalFrameWrapper').scrollTop = DegreeRequirementsService.getGeneralStartingPosition();
      degreeRequirements.degrees = DegreeRequirementsService.getDegrees();
      degreeRequirements.selected = undefined;
    }();

    degreeRequirements.scrollFrame = function(scrollToX) {
      if(scrollToX != null) {
         frameWrapper.scrollTop = scrollToX;
      } else {
        // TODO
        // error message - "please select a degree from the dropdown"
      }
    };

  }

  angular.module('degree-requirements', [])
    .config(config)
    .controller('DegreeRequirementsCtrl', DegreeRequirementsCtrl);
})();
