(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.ubcIO', {
        url: '/ubcIO',
        views: {
          '@': {
            templateUrl: 'src/app/ubcIO/ubcIO.tpl.html',
            controller: 'UbcIOCtrl as ubcIO'
          }
        }
      });
  }

  /**
   * @name  UbcIOCtrl
   * @description Controller
   */
  function UbcIOCtrl() {
    var ubcIO = this;
  }

  angular.module('ubcIO', [])
    .config(config)
    .controller('UbcIOCtrl', UbcIOCtrl);
})();
