(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar', {
          templateUrl: 'src/common/sub-bar/sub-bar.tpl.html',
          controller: 'SubBarCtrl as subBar',
          abstract: true
        });
  }


  function subBarCtrl() {

  }

  angular.module('common.sub-bar', [])
    .config(config)
    .controller('SubBarCtrl', subBarCtrl);
})();
