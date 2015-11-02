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
  function DegreeRequirementsCtrl(DegreeRequirementsService) {
    var degreeRequirements = this;

    var init = function () {
      degreeRequirements.degrees = DegreeRequirementsService.getDegrees();
      degreeRequirements.selected = undefined;
      degreeRequirements.website = "http://www.calendar.ubc.ca/vancouver/index.cfm?tree=12,215,410,421#5297";
    }();

    degreeRequirements.onClick = function () {
      if (degreeRequirements.website == degreeRequirements.selected.website) {
        degreeRequirements.website = degreeRequirements.selected.website + " ";  // this tells angular that the website has changed so it goes back to the url (in case person scrolled and wanted to go back)
      } else {
        degreeRequirements.website = degreeRequirements.selected.website;
      }
    }
  }

  angular.module('degree-requirements', [])
    .config(config)
    .controller('DegreeRequirementsCtrl', DegreeRequirementsCtrl);
})();
