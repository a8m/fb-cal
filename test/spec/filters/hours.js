'use strict';

describe('hoursFilter', function () {

  var filter;

  beforeEach(module('fbCalender'));

  beforeEach(inject(function ($filter) {
    filter = $filter('hours');
  }));

  it('should get a not valid domain, and return it as-is', function () {
    expect(filter(700)).toEqual(700);
    expect(filter(123)).toEqual(123);
  });

  it('should get a valid domain, and start-hour, and return a timeline array', function() {
    expect(filter(120, 6)).toEqual([
      { viewHour : 6, zoneHour : 'AM', start : 0, end : 60 },
      { viewHour : 7, zoneHour : 'AM', start : 60, end : 120 },
      { viewHour : 8, zoneHour : 'AM', start : 120, end : 180 }
    ]);
    expect(filter(60, 11)).toEqual([
      { viewHour : 11, zoneHour : 'AM', start : 0, end : 60 },
      { viewHour : 12, zoneHour : 'PM', start : 60, end : 120 }
    ]);
  });

  it('should get a valid with no start-hour and use zero instead', function() {
    expect(filter(60)).toEqual([
      { viewHour : 0, zoneHour : 'AM', start : 0, end : 60 },
      { viewHour : 1, zoneHour : 'AM', start : 60, end : 120 }
    ]);
  });

});
