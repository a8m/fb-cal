'use strict';
/**
 * @ngdoc function
 * @name fbCalender.filter.organizer
 * @description
 * get array of events and organize collisions
 */
function organizerFactory() {

  /**
   * @private
   * @param siblings
   * @returns {boolean}
   */
  function organize(siblings) {
    var marked = siblings.filter(function(sibling) {
      return sibling.right === false;
    }).length;
    return marked ? true : false;
  }

  /**
   * @private
   * @description
   * return if two events collision in the same time scope
   * @param own
   * @param sibling
   */
  function checkCollision(own, sibling) {
    return sibling.end >= own.end && sibling.start <= own.start  ||
      sibling.end <= own.end && sibling.start >= own.start  ||
      sibling.start >= own.start && sibling.start < own.end ||
      sibling.end <= own.end && sibling.end > own.start;
  }

  /**
   * @public
   * @description
   * organizeFactory return an organize function
   * this function takes "list" os events and "sort" them
   * #find-siblings, #oragnize-place
   */
  return function(events) {
    events.forEach(function(event, i) {
      var siblings = events.filter(function(sibEv, sibI) {
        return i === sibI ? false : checkCollision(event, sibEv);
      });
      event.siblings = siblings.length;
      event.right = organize(siblings);
    });

    return events;
  };
}