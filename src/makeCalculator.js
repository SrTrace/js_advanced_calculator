'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    add(value) {
      calculator.result += value;
    },
    subtract(value) {
      calculator.result -= value;
    },
    multiply(value) {
      calculator.result *= value;
    },
    divide(value) {
      calculator.result /= value;
    },
    reset() {
      calculator.result = 0;

      return calculator;
    },
    operate(callback, value) {
      callback(value);

      return this;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
