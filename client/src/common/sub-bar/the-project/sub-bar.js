(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-the-project', {
          templateUrl: 'src/common/sub-bar/the-project/sub-bar.tpl.html',
          controller: 'SubBarTheProjectCtrl as subBar',
          abstract: true
        });
  }


  function subBarTheProjectCtrl() {

  }

  angular.module('common.the-project.sub-bar', [])
    .config(config)
    .controller('SubBarTheProjectCtrl', subBarTheProjectCtrl);
})();
