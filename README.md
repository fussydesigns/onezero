# OneZero.js

## Installation

`>npm install onezero --save`

## Usage

```
var zero = require('onezero');
var date = {year: 2027, month: 7, date: 4};
var output = zero(date) +'/'+ zero(month) +'/'+ year;
document.write(output); // prints '04/07/2027'
```

### Why would I use this?

Time and date formatting are often written like `06/07/2018` and `08:07 AM`, but by default many libraries return days, months, hours, minutes and seconds as integers, creating outputs like `6/7/2018` and `8:7 AM`.

For websites and applications using string-based datetime functions in their user interfaces, this inconsistency is unacceptable.

### Testing

Uses mocha and chai against `./test.js`.

`npm test`
