(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-hackathons.add-hackathon', {
        url: "/hackathons/add-hackathon",
        templateUrl: 'src/app/hackathons/add-hackathon/add-hackathon.tpl.html',
        controller: 'AddHackathonHackathonsCtrl as addHackathon'
        }
      );
  }

  /**
   * @name  AddHackathonHackathonsCtrl
   * @description Controller
   */
  function AddHackathonHackathonsCtrl() {
    var addHackathon = this;

    addHackathon.submitHackathon = function() {
      // TODO Post Request to API
    };

  }

  angular.module('hackathons.add-hackathon', [])
    .config(config)
    .controller('AddHackathonHackathonsCtrl', AddHackathonHackathonsCtrl);
})();
