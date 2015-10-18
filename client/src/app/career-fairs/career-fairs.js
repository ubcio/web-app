(function() {
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
  function CareerFairsCtrl() {
    var careerFairs = this;
  }

  angular.module('career-fairs', [])
    .config(config)
    .controller('CareerFairsCtrl', CareerFairsCtrl);
})();
