(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.companies', {
        url: '/companies',
        views: {
          '@': {
            templateUrl: 'src/app/companies/companies.tpl.html',
            controller: 'CompaniesCtrl as companies'
          }
        }
      });
  }

  /**
   * @name  CompaniesCtrl
   * @description Controller
   */
  function CompaniesCtrl() {
    var companies = this;
  }

  angular.module('companies', [])
    .config(config)
    .controller('CompaniesCtrl', CompaniesCtrl);
})();
