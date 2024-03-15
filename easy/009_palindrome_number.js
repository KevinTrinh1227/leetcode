/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  x = x.toString();
  let y = "";

  for (let i = x.length - 1; i >= 0; i--) {
    y += x[i];
  }

  if (x == y) {
    return true;
  } else {
    return false;
  }
};
