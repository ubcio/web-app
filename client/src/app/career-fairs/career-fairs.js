(function () {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.career-fairs', {
        url: '/career-fairs',
        views: {
          '@': {
            templateUrl: 'src/app/career-fairs/career-fairs.tpl.html',
            controller: 'CareerFairsCtrl as careerFairs'
          }
        }
      });
  }

  /**
   * @name  CareerFairsCtrl
   * @description Controller
   */
  function CareerFairsCtrl(CareerFairsService, $scope) {
    var careerFairs = this;

    var postInit = function (careerFairsData) {
      careerFairs.careerFairs = careerFairsData;
      careerFairs.loaded = true;
      $scope.$digest();
    };

    var init = function () {
      CareerFairsService.getCareerFairs(postInit);
      careerFairs.loaded = false;
    };

    init();
  }

  angular.module('career-fairs', [])
    .config(config)
    .controller('CareerFairsCtrl', CareerFairsCtrl);
})();
