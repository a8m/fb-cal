'use strict';

describe('organizerFactory', function() {

  beforeEach(module('fbCalender'));

  it('should get an array of objects and return them with' +
    '2 new properties: ["siblings", "right"]', inject(function(organizer) {
    organizer([
      { start: 30, end: 60  },
      { start: 40, end: 50  },
      { start: 90, end: 120 }
    ]).forEach(function(event) {
      expect(event.siblings).toBeDefined();
      expect(event.right).toBeDefined();
    });
  }));

  it('should calculate the collisions events and bind them to ' +
    'siblings property', inject(function(organizer) {
    var events = organizer([
      { start: 30,  end: 90 },
      { start: 60,  end: 120 },
      { start: 100, end: 150 },
      { start: 190, end: 400 }
    ]);
    var expected = [1, 2, 1, 0]; //expected siblings sorted by index
    events.forEach(function(event, i) {
      expect(event.siblings).toEqual(expected[i]);
    });
  }));

  it('should `shift right`, by ordering priority', inject(function(organizer) {
    var events = organizer([
      { start: 30,  end: 90 },
      { start: 60,  end: 120 },
      { start: 100, end: 150 },
      { start: 190, end: 400 }
    ]);
    var expected = [false, true, false, false]; //expected shifting sorted by index
    events.forEach(function(event, i) {
      expect(event.right).toEqual(expected[i]);
    });
  }));

});