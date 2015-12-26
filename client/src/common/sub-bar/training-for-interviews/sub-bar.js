(function() {
  'use strict';

  function config($stateProvider) {

      $stateProvider
        .state('root.sub-bar-training-for-interviews', {
          templateUrl: 'src/common/sub-bar/training-for-interviews/sub-bar.tpl.html',
          controller: 'SubBarTrainingForInterviewsCtrl as subBar',
          abstract: true
        });
  }


  function subBarTrainingForInterviewsCtrl() {

  }

  angular.module('common.training-for-interviews.sub-bar', [])
    .config(config)
    .controller('SubBarTrainingForInterviewsCtrl', subBarTrainingForInterviewsCtrl);
})();
