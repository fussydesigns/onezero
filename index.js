'use strict'

var zero = function(input) {
  input = input.toString();
  if (input.length == 1) {
    return '0'+ input.toString();
  } else {
    return input.toString();
  }
}

module.exports = zero;