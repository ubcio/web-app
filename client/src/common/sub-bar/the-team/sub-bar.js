(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-the-team', {
          templateUrl: 'src/common/sub-bar/the-team/sub-bar.tpl.html',
          controller: 'SubBarTheTeamCtrl as subBar',
          abstract: true
        });
  }


  function subBarTheTeamCtrl() {

  }

  angular.module('common.the-team.sub-bar', [])
    .config(config)
    .controller('SubBarTheTeamCtrl', subBarTheTeamCtrl);
})();
