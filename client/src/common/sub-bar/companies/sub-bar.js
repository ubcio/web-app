(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-companies', {
          templateUrl: 'src/common/sub-bar/companies/sub-bar.tpl.html',
          controller: 'SubBarCompaniesCtrl as subBar',
          abstract: true
        });
  }


  function subBarCompaniesCtrl() {

  }

  angular.module('common.companies.sub-bar', [])
    .config(config)
    .controller('SubBarCompaniesCtrl', subBarCompaniesCtrl);
})();
