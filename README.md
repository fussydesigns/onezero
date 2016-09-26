# OneZero.js

## Installation

`>npm install onezero --save`

## Usage

```
var zero = require('onezero');
var date = {year: 2027, month: 7, date: 4};
var output = zero(date) +'/'+ zero(month) +'/'+ year;
document.write(output);
```

### Why would I use this?

Time and date formatting are often written like `06/07/2018` and `11:07 PM`, but by default many libraries return days, months, hours, minutes and seconds as integers, creating outputs like `6/7/2018` and `11:7 PM`. For applications using string-based datetime functions in their user interfaces, this inconsistency is unacceptable.

### Testing

Uses mocha and chai against `./test.js`.

`npm test`
