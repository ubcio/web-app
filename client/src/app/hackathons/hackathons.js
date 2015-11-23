(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.hackathons', {
        url: '/hackathons',
        views: {
          '@': {
            templateUrl: 'src/app/hackathons/hackathons.tpl.html',
            controller: 'HackathonsCtrl as hackathons'
          }
        }
      });
  }

  /**
   * @name  HackathonsCtrl
   * @description Controller
   */
  function HackathonsCtrl(HackathonsService , $scope) {
    var hackathons = this;

    var postInit = function(hackathonsData) {
      hackathons.hackathons = hackathonsData;
      hackathons.loaded = true;
      $scope.$applyAsync();
    };

    var init = function () {
      HackathonsService.getHackathons(postInit);
      hackathons.loaded = false;
    };

    init();
  }

  angular.module('hackathons', [])
    .config(config)
    .controller('HackathonsCtrl', HackathonsCtrl);
})();
