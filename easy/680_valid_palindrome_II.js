/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    if (s[l] == s[r]) {
      l++;
      r--;
    } else {
      let lSub = s.substring(l + 1, r + 1);
      let rSub = s.substring(l, r);
      if (
        lSub == lSub.split("").reverse().join("") ||
        rSub == rSub.split("").reverse().join("")
      ) {
        return true;
      } else {
        return false;
      }
    }
  }

  return true;
};
