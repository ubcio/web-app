(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.about', {
        url: '/about',
        views: {
          '@': {
            templateUrl: 'src/app/about/about.tpl.html',
            controller: 'AboutCtrl as about'
          }
        }
      });
  }

  /**
   * @name  AboutCtrl
   * @description Controller
   */
  function AboutCtrl() {}

  angular.module('about', [])
    .config(config)
    .controller('AboutCtrl', AboutCtrl);
})();
