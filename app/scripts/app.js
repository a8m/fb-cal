'use strict';
/* global
  CalenderCtrl,
  hoursFilter,
  offsetterDirective,
  organizerFactory,
  */
/**
 * @ngdoc overview
 * @name fbCalenderApp
 * @description
 * fbCalenderApp
 *
 * Main module of the application.
 */
angular.module('fbCalender', [])
  .controller({
    CalenderCtrl: ['$scope', 'hoursFilter', 'organizer','CALENDER', '$window', CalenderCtrl]
  })
  .constant({
    CALENDER: { DOMAIN: 720, START_AT: 9 }
  })
  .directive({
    offsetter: offsetterDirective
  })
  .factory({
    organizer: organizerFactory
  })
  .filter({
    hours: hoursFilter
  });