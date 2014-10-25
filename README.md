#fb-cal [![Build Status](https://travis-ci.org/a8m/fb-cal.svg?branch=master)](https://travis-ci.org/a8m/fb-cal) [![Coverage Status](https://img.shields.io/coveralls/a8m/fb-cal.svg)](https://coveralls.io/r/a8m/fb-cal?branch=master)
**Usage:**  
Run tests (unit, e2e)
```sh
$ grunt test
```
Run build (compass, concat, uglify, etc.. to **dist** directory).  
```sh
$ grunt build
```
**Run Examples** Create daily events from you browser console
```js
layOutDay([
      { start: 30,  end: 150 },
      { start: 90,  end: 150 },
      { start: 560, end: 620 },
      { start: 620, end: 710 },
      { start: 220, end: 280 },
      { start: 510, end: 640 },
      { start: 650, end: 715 },
      { start: 310, end: 390 },
      { start: 340, end: 400 },
      { start: 320, end: 480 },
      { start: 60,  end: 120 },
      { start: 120, end: 200 }
    ]);
```
**More Examples**
```js
//#1
layOutDay([
   { start: 30,  end: 150 },
   { start: 60,  end: 150 },
   { start: 560, end: 620 },
   { start: 610, end: 670 },
   { start: 620, end: 670 }
   ]);
//#2
layOutDay([
   { start: 30,  end: 150 },
   { start: 540, end: 660 },
   { start: 560, end: 620 },
   { start: 620, end: 700 },
   { start: 310, end: 390 },
   { start: 340, end: 400 },
   { start: 320, end: 480 },
   { start: 60,  end: 120 },
   { start: 120, end: 200 }
   ]);
//#3
layOutDay([
   { start: 10,  end: 60 },
   { start: 100, end: 190 },
   { start: 120, end: 200 },
   { start: 205, end: 290 },
   { start: 310, end: 390 },
   { start: 340, end: 400 },
   { start: 320, end: 480 },
   { start: 60,  end: 120 },
   { start: 120, end: 200 },
   { start: 440, end: 500 },
   { start: 540, end: 640 },
   { start: 640, end: 700 },
   { start: 620, end: 700 },
   ]);
```
**TODO:**
* Make it more configurable
* Add month/year calender view
* expose API to work with him
