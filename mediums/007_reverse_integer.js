/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
  const min = -1 * 2 ** 31;
  const max = 2 ** 31 - 1;

  let output = 0;
  while (x !== 0) {
    let digit = x % 10;
    x = Math.trunc(x / 10);

    if (
      output < Math.trunc(min / 10) ||
      (output == Math.trunc(min / 10) && digit < min % 10)
    ) {
      return 0;
    }
    if (
      output > Math.trunc(max / 10) ||
      (output == Math.trunc(max / 10) && digit > max % 10)
    ) {
      return 0;
    }

    output = output * 10 + digit;
  }

  return output;
};
