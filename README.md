fb-cal
======
**Usage:**  
Run tests (unit, e2e)
```sh
$ grunt test
```
Run build (compass, concat, uglify, etc.. to **dist** directory).  
```sh
$ grunt build
```
Create daily events from you browser console
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
    ])
```
