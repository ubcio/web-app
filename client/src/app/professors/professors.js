(function() {
  'use strict';

  /**
   * @name config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.professors', {
          url: '/professors',
          templateUrl: 'src/app/professors/professors.tpl.html',
          controller: 'ProfessorsCtrl as professors'
        }
      );
  }

  /**
   * @name ProfessorsCtrl
   * @description Controller
   */
  function ProfessorsCtrl(ProfessorsService , $scope) {
    var professors = this;

    var postInitFailure = function() {
      professors.inputText = 'sorry could not load data';
    };

    var postInitSuccess = function(professorsData) {
      professors.professors = professorsData;
      professors.loaded = true;
      professors.inputText = 'enter a professor\'s name...';
      $scope.$applyAsync();
    };

    var init = function(){
      ProfessorsService.getProfessors(postInitSuccess , postInitFailure);
      professors.selectedProf = undefined;
      professors.loaded = false;
      professors.inputText = 'loading data...';

      professors.orderByDate = function(index) {
        var stringDate = professors.selectedProf.reviews[index].createDate;
        return new Date(stringDate);
      };

// Go through the array and find the index
      professors.getReviewIndexes = function(prof) {
        for(var i = 0; i < prof.courses.length; i += 1) {
          if(prof.courses[i].courseName === prof.reviewsFilter) {
            return prof.courses[i].reviewsIndex;
          }
        }
      };
    };

    init();
  }

  angular.module('professors', [])
    .config(config)
    .controller('ProfessorsCtrl', ProfessorsCtrl);
})();
