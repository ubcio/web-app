(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-degree-requirements', {
          templateUrl: 'src/common/sub-bar/degree-requirements/sub-bar.tpl.html',
          controller: 'SubBarDegreeRequirementsCtrl as subBar',
          abstract: true
        });
  }


  function subBarDegreeRequirementsCtrl() {

  }

  angular.module('common.degree-requirements.sub-bar', [])
    .config(config)
    .controller('SubBarDegreeRequirementsCtrl', subBarDegreeRequirementsCtrl);
})();
