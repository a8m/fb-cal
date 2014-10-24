'use strict';

describe('hoursFilter', function () {

  var filter;

  beforeEach(module('fbCalender'));

  beforeEach(inject(function ($filter) {
    filter = $filter('hours')
  }));

  it('should get a not valid domain, and return it as-is', function () {
    expect(filter(700)).toEqual(700);
    expect(filter(123)).toEqual(123);
  });

});
