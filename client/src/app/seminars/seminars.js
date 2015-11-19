(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.seminars', {
        url: '/seminars',
        views: {
          '@': {
            templateUrl: 'src/app/seminars/seminars.tpl.html',
            controller: 'SeminarsCtrl as seminars'
          }
        }
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
      $scope.$digest();
    };

    var init = function() {
      SeminarsService.getSeminars(postInit);
      seminars.loaded = false;
    }();
  }

  angular.module('seminars', [])
    .config(config)
    .controller('SeminarsCtrl', SeminarsCtrl);
})();
