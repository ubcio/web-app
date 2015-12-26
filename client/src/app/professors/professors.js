(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar.professors', {
        url: '/professors',
        templateUrl: 'src/app/professors/professors.tpl.html',
        controller: 'ProfessorsCtrl as professors'
        }
      );
  }

  /**
   * @name  ProfessorsCtrl
   * @description Controller
   */
  function ProfessorsCtrl(ProfessorsService , $scope) {
    var professors = this;

    var postInit = function(professorsData) {
      professors.professors = professorsData;
      professors.loaded = true;
      professors.inputText = 'enter a professor\'s name...';
      $scope.$applyAsync();
    };

    var init = function(){
      ProfessorsService.getProfessors(postInit);
      professors.selectedProf = undefined;
      professors.loaded = false;
      professors.inputText = 'loading data...';
      professors.orderByDate = function(index) {
        var stringDate = professors.selectedProf.reviews[index].createDate;
        return new Date(stringDate);
      };
    };

    init();
  }

  angular.module('professors', [])
    .config(config)
    .controller('ProfessorsCtrl', ProfessorsCtrl);
})();
