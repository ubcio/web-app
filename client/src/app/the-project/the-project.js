(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar.the-project', {
        url: '/the-project',
        templateUrl: 'src/app/the-project/the-project.tpl.html',
        controller: 'TheProjectCtrl as theProject'
      });
  }

  /**
   * @name  TheProjectCtrl
   * @description Controller
   */
  function TheProjectCtrl() {}

  angular.module('the-project', [])
    .config(config)
    .controller('TheProjectCtrl', TheProjectCtrl);
})();
