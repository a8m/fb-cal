'use strict';

describe('Controller: CalenderCtrl', function () {

  var CalenderCtrl,
    scope,
    spy,
    mock = {
      const: { DOMAIN: 60, START_AT: 2 },
      filter: function($) { return  $; }
    };

  beforeEach(module('fbCalender', function($provide) {
    //create mock of the organizer service
    $provide.factory('organizer', function() {
      return function($) { return $; };
    });
  }));

  beforeEach(inject(function ($controller, $rootScope, $window) {
    //cuz we called the hours filter on invocation
    spy = spyOn(mock, 'filter');
    scope = $rootScope.$new();

    CalenderCtrl = $controller('CalenderCtrl', {
      $scope: scope,
      hoursFilter: mock.filter,
      CALENDER: mock.const,
      $window: $window
    });
  }));

  it('should add the `layOutDay` on the global object($window)', inject(function($window) {
    expect($window.layOutDay).toBeDefined();
    expect(typeof $window.layOutDay).toEqual('function');
  }));

  it('should called filter with CALENDER mock `on load`', function() {
    expect(spy).toHaveBeenCalledWith(mock.const.DOMAIN, mock.const.START_AT);
  });

  it('#layOutDay, should update events property, + called $digest',
    inject(function($window) {
      var spy = spyOn(scope, '$digest');
      $window.layOutDay([{start:0, end: 60}]);
      expect(scope.events).toEqual([{start:0, end: 60}]);
      expect(spy).toHaveBeenCalled();
  }));

  it('#layOutDay, should get a !not array, and return the value as-is',
    inject(function($window) {
      expect($window.layOutDay('string')).toEqual('string');
      expect($window.layOutDay(!1)).toBeFalsy();
  }));
});
