(function() {
  'use strict';

  /**
   * @name  config
   * @description config block
   */
  function config($stateProvider) {
    $stateProvider
      .state('root.sub-bar-the-project.leave-a-suggestion', {
        url: "/the-project/leave-a-suggestion",
        templateUrl: 'src/app/the-project/leave-a-suggestion/leave-a-suggestion.tpl.html',
        controller: 'LeaveASuggestionTheProjectCtrl as leaveASuggestion'
        }
      );
  }

  /**
   * @name  LeaveASuggestionTheProjectCtrl
   * @description Controller
   */
  function LeaveASuggestionTheProjectCtrl() {
    var leaveASuggestion = this;

    leaveASuggestion.submitSuggestion = function() {
      // TODO Post Request to API
    };

  }

  angular.module('the-project.leave-a-suggestion', [])
    .config(config)
    .controller('LeaveASuggestionTheProjectCtrl', LeaveASuggestionTheProjectCtrl);
})();
