(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-tutors', {
          templateUrl: 'src/common/sub-bar/tutors/sub-bar.tpl.html',
          controller: 'SubBarTutorsCtrl as subBar',
          abstract: true
        });
  }


  function subBarTutorsCtrl() {

  }

  angular.module('common.tutors.sub-bar', [])
    .config(config)
    .controller('SubBarTutorsCtrl', subBarTutorsCtrl);
})();
