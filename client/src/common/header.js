(function() {
  'use strict';

  function headerCtrl($log) {
    var header = this; 
  }

  angular.module('common.header', [])
    .controller('HeaderCtrl', headerCtrl);
})();
