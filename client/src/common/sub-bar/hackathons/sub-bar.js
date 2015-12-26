(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-hackathons', {
          templateUrl: 'src/common/sub-bar/hackathons/sub-bar.tpl.html',
          controller: 'SubBarHackathonsCtrl as subBar',
          abstract: true
        });
  }


  function subBarHackathonsCtrl() {

  }

  angular.module('common.hackathons.sub-bar', [])
    .config(config)
    .controller('SubBarHackathonsCtrl', subBarHackathonsCtrl);
})();
