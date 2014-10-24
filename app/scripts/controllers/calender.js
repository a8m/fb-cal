'use strict';

/**
 * @ngdoc function
 * @name fbCalender.controller:CalenderCtrl
 * @description
 * # CalenderCtrl
 * Controller of the fbCalenderApp
 */
 function CalenderCtrl($scope, hoursFilter, organizer, CALENDER, $window) {

  $scope.timelineHours = hoursFilter(CALENDER.DOMAIN, CALENDER.START_AT);

  $scope.events = organizer([
      { start: 30,  end: 150 },
      { start: 540, end: 600 },
      { start: 560, end: 620 },
      { start: 610, end: 670 },
      { start: 310, end: 390 },
      { start: 340, end: 400 },
      { start: 390, end: 480 },
      { start: 60,  end: 120 },
      { start: 120, end: 200 }
    ]);

  /*
   TEST DATA
   [
   { start: 30,  end: 150 },
   { start: 540, end: 660 },
   { start: 560, end: 620 },
   { start: 620, end: 700 },
   { start: 310, end: 390 },
   { start: 340, end: 400 },
   { start: 320, end: 480 },
   { start: 60,  end: 120 },
   { start: 120, end: 200 }
   ]
   */

  /**
   * @description
   * this the exported function to console,
   * we MUST to apply this "ugly" $digest,
   * cuz it will run outside the angular scope.
   * so, we call $digest manually.
   * @param events
   * @returns {*}
   */
  $window.layOutDay = function(events) {
    return (!angular.isArray(events)) ? events
        : ($scope.events = organizer(events)) && $scope.$digest();
  };
}