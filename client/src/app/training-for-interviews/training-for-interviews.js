(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.training-for-interviews', {
        url: '/training-for-interviews',
        views: {
          '@': {
            templateUrl: 'src/app/training-for-interviews/training-for-interviews.tpl.html',
            controller: 'TrainingForInterviewsCtrl as trainingForInterviews'
          }
        }
      });
  }

  /**
   * @name  TrainingForInterviewsCtrl
   * @description Controller
   */
  function TrainingForInterviewsCtrl() {
    var trainingForInterviews = this;
  }

  angular.module('training-for-interviews', [])
    .config(config)
    .controller('TrainingForInterviewsCtrl', TrainingForInterviewsCtrl);
})();
