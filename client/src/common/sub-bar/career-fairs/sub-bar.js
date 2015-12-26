(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-career-fairs', {
          templateUrl: 'src/common/sub-bar/career-fairs/sub-bar.tpl.html',
          controller: 'SubBarCareerFairsCtrl as subBar',
          abstract: true
        });
  }


  function subBarCareerFairsCtrl() {

  }

  angular.module('common.career-fairs.sub-bar', [])
    .config(config)
    .controller('SubBarCareerFairsCtrl', subBarCareerFairsCtrl);
})();
