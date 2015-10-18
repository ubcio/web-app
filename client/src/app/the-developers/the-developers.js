(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.the-developers', {
        url: '/the-developers',
        views: {
          '@': {
            templateUrl: 'src/app/the-developers/the-developers.tpl.html',
            controller: 'TheDevelopersCtrl as theDevelopers'
          }
        }
      });
  }

  /**
   * @name  TheDevelopersCtrl
   * @description Controller
   */
  function TheDevelopersCtrl() {
    var theDevelopers = this;
  }

  angular.module('the-developers', [])
    .config(config)
    .controller('TheDevelopersCtrl', TheDevelopersCtrl);
})();
