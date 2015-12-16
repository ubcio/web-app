(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.the-team', {
        url: '/the-team',
        views: {
          '@': {
            templateUrl: 'src/app/the-team/the-team.tpl.html',
            controller: 'TheTeam as theTeam'
          }
        }
      });
  }

  /**
   * @name  TheTeamCtrl
   * @description Controller
   */
  function TheTeamCtrl() {}

  angular.module('the-team', [])
    .config(config)
    .controller('TheTeamCtrl', TheTeamCtrl);
})();
