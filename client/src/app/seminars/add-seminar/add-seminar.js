(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-seminars.add-seminar', {
        url: "/seminars/add-seminar",
        templateUrl: 'src/app/seminars/add-seminar/add-seminar.tpl.html',
        controller: 'AddSeminarSeminarsCtrl as addSeminar'
        }
      );
  }

  /**
   * @name  AddSeminarSeminarsCtrl
   * @description Controller
   */
  function AddSeminarSeminarsCtrl() {
    var addSeminar = this;

    addSeminar.submitSeminar = function() {
      // TODO Post Request to API
    };

  }

  angular.module('seminars.add-seminar', [])
    .config(config)
    .controller('AddSeminarSeminarsCtrl', AddSeminarSeminarsCtrl);
})();
