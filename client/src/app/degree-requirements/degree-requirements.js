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

      // Default page is first year reqs for CS
      degreeRequirements.selected = {
        'name': '',
        'website': 'http://www.calendar.ubc.ca/vancouver/index.cfm?tree=12,215,410,421#5297'
      };
    };

    init();
  }

  angular.module('degree-requirements', [])
    .config(config)
    .controller('DegreeRequirementsCtrl', DegreeRequirementsCtrl);
})();
