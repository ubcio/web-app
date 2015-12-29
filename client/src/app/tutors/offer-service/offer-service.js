(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-tutors.offer-service', {
        url: "/tutors/offer-service",
        templateUrl: 'src/app/tutors/offer-service/offer-service.tpl.html',
        controller: 'OfferServiceTutorsCtrl as addTutor'
        }
      );
  }

  /**
   * @name  OfferServiceTutorsCtrl
   * @description Controller
   */
  function OfferServiceTutorsCtrl() {
    var addTutor = this;

    var init = function() {
      addTutor.price = 25; // default value
    };

    addTutor.submitTutor = function() {
      // TODO Post Request to API
    };

    init();
  }

  angular.module('tutors.offer-service', [])
    .config(config)
    .controller('OfferServiceTutorsCtrl', OfferServiceTutorsCtrl);
})();
