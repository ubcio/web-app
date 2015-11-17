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
  function HackathonsCtrl(HackathonsService) {
    var hackathons = this;

    var init = function () {
      hackathons.hackathons = HackathonsService.getHackathons();
    }();
  }

  angular.module('hackathons', [])
    .config(config)
    .controller('HackathonsCtrl', HackathonsCtrl);
})();
