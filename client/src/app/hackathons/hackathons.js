(function() {
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
  function HackathonsCtrl() {
    var hackathons = this;
  }

  angular.module('hackathons', [])
    .config(config)
    .controller('HackathonsCtrl', HackathonsCtrl);
})();
