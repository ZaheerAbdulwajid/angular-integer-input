//integer-input
// ==================
//
// Directive that makes the inputs with `integer` to be
// available as integer in the model.
//
(function () {
  'use strict';

  angular.module('integer-input', [])

  .directive('integer', [
    '$parse',
    function ($parse) {
      return {
        require: 'ngModel',
        link: function(scope, ele, attr, ctrl){
            ctrl.$parsers.unshift(function(viewValue){
                return parseInt(viewValue, 10);
            });
        }
      };
    }
  ]);

})();
