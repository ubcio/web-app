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
    var frameWrapper = document.getElementById('specificFrameWrapper');
    var firstYearRequirements = 1840;

    var init = function() {
      frameWrapper.scrollTop = firstYearRequirements;                 // Start on first year requirements
      document.getElementById('generalFrameWrapper').scrollTop = 350; // focus on general degree requirements
    };
    init();

    degreeRequirements.degrees = [
      {name: "Computer Science Major", scroll: 2275},
      {name: "Computer Science Honours", scroll: 2650},
      {name: "Computer Science and Another Science Subject Combined Major", scroll: 3200},
      {name: "Computer Science and Biology Combined Major" , scroll: 3920},
      {name: "Computer Science and Mathematics Combined Major", scroll: 3970},
      {name: "Computer Science and Microbiology and Immunology Combined Major", scroll: 4020},
      {name: "Computer Science and Physics Combined Major" , scroll: 4070},
      {name: "Computer Science and Statistics Combined Major" , scroll: 5090},
      {name: "Atmospheric Science and Computer Science Combined Honours" , scroll: 5965},
      {name: "Computer Science and Biology Combined Honours" , scroll: 6020},
      {name: "Computer Science and Mathematics Combined Honours", scroll: 6075},
      {name: "Computer Science and Microbiology and Immunology Combined Honours", scroll: 6990},
      {name: "Computer Science and Physics Combined Honours" , scroll: 7040},
      {name: "Computer Science and Statistics Combined Honours" , scroll: 8100},
      {name: "Computer Science and Software Engineering Major" , scroll: 9265},
      {name: "Computer Science and Software Engineering Honours" , scroll: 9760},
      {name: "Cognitive Systems Major: Computational Intelligence and Design", scroll: 10300}
    ];
    degreeRequirements.selected = undefined;

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
