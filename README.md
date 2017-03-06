# angular-integer-input
Directive that makes the inputs with `integer` to be available as integer in the model.

`bower install integer-input --save`
## inject 'integer-input' in your app module as following.

angular.module('test', ['integer-input']);

use in input as `<input type="[text|number|checkbox|radio etc]" ng-model="product.quantity" integer/>`