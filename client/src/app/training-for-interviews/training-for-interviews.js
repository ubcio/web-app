(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-training-for-interviews.training-for-interviews', {
        url: '/training-for-interviews',
        templateUrl: 'src/app/training-for-interviews/training-for-interviews.tpl.html',
        controller: 'TrainingForInterviewsCtrl as trainingForInterviews'
      });
  }

  /**
   * @name  TrainingForInterviewsCtrl
   * @description Controller
   */
  function TrainingForInterviewsCtrl() { }

  angular.module('training-for-interviews', [])
    .config(config)
    .controller('TrainingForInterviewsCtrl', TrainingForInterviewsCtrl);
})();
