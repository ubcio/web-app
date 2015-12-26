(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-seminars', {
          templateUrl: 'src/common/sub-bar/seminars/sub-bar.tpl.html',
          controller: 'SubBarSeminarsCtrl as subBar',
          abstract: true
        });
  }


  function subBarSeminarsCtrl() {

  }

  angular.module('common.seminars.sub-bar', [])
    .config(config)
    .controller('SubBarSeminarsCtrl', subBarSeminarsCtrl);
})();
