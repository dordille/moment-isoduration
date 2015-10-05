As of Moment 2.3.0 ISO 8601 durations are supported without the need for this plugin.
http://momentjs.com/docs/#/durations/creating/
```js
moment.duration('P1Y2M3DT4H5M6S');
moment.duration('P1M');
```

moment-isoduration
==================


Moment.js durations using ISO 8601

### Create moment duration from ISO 8601 duration string
```javascript
var duration = moment.duration.fromIsoduration('P3Y6M7W4DT12H30M5S');
```

### Get ISO 8601 representation of moment duration
```javascript
var duration = moment.duration({
  years: 1,
  days: 2,
  minutes: 61
});
duration.isoduration(); // "P1Y2DT1H1M"
```
