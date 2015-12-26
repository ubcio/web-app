(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-the-team.the-team', {
        url: '/the-team',
        templateUrl: 'src/app/the-team/the-team.tpl.html',
        controller: 'TheTeamCtrl as theTeam'
      });
  }

  /**
   * @name  TheTeamCtrl
   * @description Controller
   */
  function TheTeamCtrl(TheTeamService , $scope) {
    var theTeam = this;

    // Fisher–Yates shuffle algorithm
    var shuffleArray = function(array) {
      var m = array.length, t, i;

      // While there remain elements to shuffle
      while (m) {
        // Pick a remaining element…
        i = Math.floor(Math.random() * m);
        m = m - 1;

        // And swap it with the current element.
        t = array[m];
        array[m] = array[i];
        array[i] = t;
      }

      return array;
    };

    var postInit = function(teamData) {
      theTeam.teamMembers = shuffleArray(teamData.teamMembers);
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
