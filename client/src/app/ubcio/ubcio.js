(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.ubcio', {
        url: '/ubcio',
        views: {
          '@': {
            templateUrl: 'src/app/ubcio/ubcio.tpl.html',
            controller: 'UbcioCtrl as ubcio'
          }
        }
      });
  }

  /**
   * @name  UbcioCtrl
   * @description Controller
   */
  function UbcioCtrl() {}

  angular.module('ubcio', [])
    .config(config)
    .controller('UbcioCtrl', UbcioCtrl);
})();
