'use strict';

describe('offsetterDirective', function () {

  var element;

  //helpers
  function compile(template) {
    return function($compile, $rootScope) {
      element = $compile(template)($rootScope);
    };
  }

  function expectCss(role, val) {
    var elmCss = element.css(role).replace(/[p|x]/g,'');
    return expect(Number(elmCss)).toEqual(val);
  }

  beforeEach(module('fbCalender'));

  it('should set element css.top based on a given argument', function() {
    inject(compile('<p offsetter="{ top: 120 }">foo bar</p>'));
    expectCss('top', 120);
  });

  it('should set element css.width based on the parent if given undefined', function() {
    var elmParent = angular.element('<div style="width: 100px"></div>');
    var elm = angular.element('<p offsetter="{ top: 120 }">foo bar</p>');
    elmParent.append(elm);
    inject(compile(elm));
    expectCss('width', 100);
  });

  it('should set element css.width based on the parent divide by the given argument', function() {
    var elmParent = angular.element('<div style="width: 100px"></div>');
    var elm = angular.element('<p offsetter="{ width: 2 }">foo bar</p>');
    elmParent.append(elm);
    inject(compile(elm));
    expectCss('width', 50);
  });

  it('should set element height if defined, or not touch it', function() {
    inject(compile('<p offsetter="{ height: 230 }">foo bar</p>'));
    expectCss('height', 230);
    inject(compile('<p style="height: 30px" offsetter="{ }">foo bar</p>'));
    expectCss('height', 30);
  });

  it('should set role right:0 if set to true(Boolean)', function() {
    inject(compile('<p offsetter="{ right: true }"></p>'));
    expectCss('right', 0);
  });

});
