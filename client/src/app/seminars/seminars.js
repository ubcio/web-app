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
  function SeminarsCtrl() {
    var seminars = this;
  }

  angular.module('seminars', [])
    .config(config)
    .controller('SeminarsCtrl', SeminarsCtrl);
})();
