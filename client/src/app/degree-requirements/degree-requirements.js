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
    degreeRequirements.degrees = [
      {name: "Computer Science Major", scroll: 100},
      {name: "Computer Science Honours", scroll: 100},
      {name: "Computer Science and Another Science Subject Combined Major", scroll: 100},
      {name: "Computer Science and Biology Combined Major" , scroll: 100},
      {name: "Computer Science and Mathematics Combined Major", scroll: 100},
      {name: "Computer Science and Microbiology and Immunology Combined Major", scroll: 100},
      {name: "Computer Science and Physics Combined Major" , scroll: 100},
      {name: "Computer Science and Statistics Combined Major" , scroll: 100},
      {name: "Atmospheric Science and Computer Science Combined Honours" , scroll: 100},
      {name: "Computer Science and Biology Combined Honours" , scroll: 100},
      {name: "Computer Science and Mathematics Combined Honours", scroll: 100},
      {name: "Computer Science and Microbiology and Immunology Combined Honours", scroll: 100},
      {name: "Computer Science and Physics Combined Honours" , scroll: 100},
      {name: "Computer Science and Statistics Combined Honours" , scroll: 100},
      {name: "Computer Science and Software Engineering Major" , scroll: 100},
      {name: "Computer Science and Software Engineering Honours" , scroll: 100},
      {name: "Cognitive Systems Major: Computational Intelligence and Design", scroll: 100}
    ];
    degreeRequirements.selected = undefined;

  }

  angular.module('degree-requirements', [])
    .config(config)
    .controller('DegreeRequirementsCtrl', DegreeRequirementsCtrl);
})();
