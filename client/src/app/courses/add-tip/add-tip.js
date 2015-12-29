(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-courses.add-tip', {
        url: "/courses/add-tip",
        templateUrl: 'src/app/courses/add-tip/add-tip.tpl.html',
        controller: 'AddTipCoursesCtrl as addTip'
        }
      );
  }

  /**
   * @name  AddTipCoursesCtrl
   * @description Controller
   */
  function AddTipCoursesCtrl() {
    var addTip = this;

    addTip.submitTip = function() {
      // TODO Post Request to API

    };

  }

  angular.module('courses.add-tip', [])
    .config(config)
    .controller('AddTipCoursesCtrl', AddTipCoursesCtrl);
})();
