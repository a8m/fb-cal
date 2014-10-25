'use strict';

/**
 * @ngdoc function
 * @name fbCalender.filter.hours
 * @description
 * get a domain number, and start hour and return an array of hours to view
 */
function hoursFilter() {
  return function(domain, startAt) {
    //id it's not a valid domain, e.g: 412
    if(domain % 60) {
      return domain;
    }

    startAt = ~~startAt;
    var res = [], n = 0, i = startAt - 1;
    do {
      res.push({
        viewHour : i = i < 12 ? i + 1 : 1,
        zoneHour : (i < startAt || i === 12) ? 'PM' : 'AM',
        start    : n,
        end      : n + 60
      });
    } while((domain + 60) > (n = n + 60));

    return res;
  };
}