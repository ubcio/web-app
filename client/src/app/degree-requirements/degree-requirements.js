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
  function DegreeRequirementsCtrl() {
    var degreeRequirements = this;
    degreeRequirements.states = ["Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado", "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho", "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada", "New Hampshire", "New Jersey", "New Mexico", "New York", "North Dakota", "North Carolina", "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington", "West Virginia", "Wisconsin", "Wyoming"];
    degreeRequirements.selected = undefined;

  }

  angular.module('degree-requirements', [])
    .config(config)
    .controller('DegreeRequirementsCtrl', DegreeRequirementsCtrl);
})();
