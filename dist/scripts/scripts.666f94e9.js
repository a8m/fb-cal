!function(a,b){"use strict";function c(a,c,d,e,f){a.timelineHours=c(e.DOMAIN,e.START_AT),a.events=d([{start:30,end:150},{start:540,end:600},{start:560,end:620},{start:610,end:670},{start:310,end:390},{start:340,end:400},{start:390,end:480},{start:60,end:120},{start:120,end:200}]),f.layOutDay=function(c){return b.isArray(c)?(a.events=d(c))&&a.$digest():c}}function d(){return function(a,b){if(a%60)return a;b=~~b;var c=[],d=0,e=b-1;do c.push({viewHour:e=12>e?e+1:1,zoneHour:b>e||12===e?"PM":"AM",start:d,end:d+60});while(a+60>(d+=60));return c}}function e(){function a(a){var b=a.filter(function(a){return a.right===!1}).length;return b?!0:!1}function b(a,b){return b.end>=a.end&&b.start<=a.start||b.end<=a.end&&b.start>=a.start||b.start>=a.start&&b.start<a.end||b.end<=a.end&&b.end>a.start}return function(c){return c.forEach(function(d,e){var f=c.filter(function(a,c){return e===c?!1:b(d,a)});d.siblings=f.length,d.right=a(f)}),c}}function f(){return{restrict:"A",scope:{},link:function(a,b,c){var d=a.$eval(c.offsetter),e=b.parent().width(),f=b.outerWidth()-b.innerWidth();b.css({top:d.top,width:(d.width?e/2:e)-f,height:d.height||b.height(),right:d.right?0:!1})}}}b.module("fbCalender",[]).controller({CalenderCtrl:["$scope","hoursFilter","organizer","CALENDER","$window",c]}).constant({CALENDER:{DOMAIN:720,START_AT:9}}).directive({offsetter:f}).factory({organizer:e}).filter({hours:d})}(window,window.angular);