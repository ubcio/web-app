(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar.companies', {
        url: '/companies',
        templateUrl: 'src/app/companies/companies.tpl.html',
        controller: 'CompaniesCtrl as companies'
      });
  }

  /**
   * @name  CompaniesCtrl
   * @description Controller
   */
  function CompaniesCtrl(CompaniesService , $scope) {
    var companies = this;

    var initPost = function(companiesData) {
      companies.companies = companiesData;
      companies.inputText = 'enter a company name...';
      companies.loaded = true;
      $scope.$applyAsync();
    };

    var init = function() {
      CompaniesService.getCompanies(initPost);
      companies.inputText = 'loading data...';
      companies.loaded = false;
      companies.selectedCompany = undefined;
      companies.orderByDate = function(review) {
        return new Date(review.createDate);
      };
    };

    init();
  }

  angular.module('companies', [])
    .config(config)
    .controller('CompaniesCtrl', CompaniesCtrl);
})();
