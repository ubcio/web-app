(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.professors', {
        url: '/professors',
        views: {
          '@': {
            templateUrl: 'src/app/professors/professors.tpl.html',
            controller: 'ProfessorsCtrl as professors'
          }
        }
      });
  }

  /**
   * @name  ProfessorsCtrl
   * @description Controller
   */
  function ProfessorsCtrl() {
    var professors = this;
  }

  angular.module('professors', [])
    .config(config)
    .controller('ProfessorsCtrl', ProfessorsCtrl);
})();
