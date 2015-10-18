(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.student-projects', {
        url: '/student-projects',
        views: {
          '@': {
            templateUrl: 'src/app/student-projects/student-projects.tpl.html',
            controller: 'StudentProjectsCtrl as studentProjects'
          }
        }
      });
  }

  /**
   * @name  StudentProjectsCtrl
   * @description Controller
   */
  function StudentProjectsCtrl() {
    var studentProjects = this;
  }

  angular.module('student-projects', [])
    .config(config)
    .controller('StudentProjectsCtrl', StudentProjectsCtrl);
})();
