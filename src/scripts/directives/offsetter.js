'use strict';

/**
 * @ngdoc function
 * @name fbCalender.directive.offsetter
 * @description
 * div's replacer, offset(t)er.
 */
function offsetterDirective() {
  return {
    restrict: 'A',
    scope: {},
    link: function(scope, elm, attr) {
      var options    = scope.$eval(attr.offsetter);
      var paWidth    = elm.parent().width();
      //padding and friends
      var spareWidth = elm.outerWidth() - elm.innerWidth();

      elm.css({
        top: options.top,
        width: (options.width ? paWidth / 2 : paWidth) - spareWidth,
        height: options.height || elm.height(),
        right: options.right ? 0 : false
      });
    }
  };
}