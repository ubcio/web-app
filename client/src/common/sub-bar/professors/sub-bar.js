(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-professors', {
          templateUrl: 'src/common/sub-bar/professors/sub-bar.tpl.html',
          controller: 'SubBarProfessorsCtrl as subBar',
          abstract: true
        });
  }


  function subBarProfessorsCtrl() {

  }

  angular.module('common.professors.sub-bar', [])
    .config(config)
    .controller('SubBarProfessorsCtrl', subBarProfessorsCtrl);
})();
