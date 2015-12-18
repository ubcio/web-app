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
            controller: 'TheTeamCtrl as theTeam'
          }
        }
      });
  }

  /**
   * @name  TheTeamCtrl
   * @description Controller
   */
  function TheTeamCtrl(TheTeamService , $scope) {
    var theTeam = this;

    var postInit = function(teamData) {
      theTeam.teamMembers = teamData.teamMembers;
      theTeam.loaded = true;
      $scope.$applyAsync();
    };

    var init = function() {
      theTeam.loaded = false;
      TheTeamService.getTheTeam(postInit);
    };

    init();
  }

  angular.module('the-team', [])
    .config(config)
    .controller('TheTeamCtrl', TheTeamCtrl);
})();
