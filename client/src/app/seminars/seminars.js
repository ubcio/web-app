(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-seminars.seminars', {
        url: '/seminars',
        templateUrl: 'src/app/seminars/seminars.tpl.html',
        controller: 'SeminarsCtrl as seminars'
      });
  }

  /**
   * @name  SeminarsCtrl
   * @description Controller
   */
  function SeminarsCtrl(SeminarsService , $scope) {
    var seminars = this;

    var postInit = function(seminarsData) {
      seminars.seminars = seminarsData;
      seminars.loaded = true;
      $scope.$applyAsync();
    };

    var init = function() {
      SeminarsService.getSeminars(postInit);
      seminars.loaded = false;
    };

    init();
  }

  angular.module('seminars', [])
    .config(config)
    .controller('SeminarsCtrl', SeminarsCtrl);
})();
