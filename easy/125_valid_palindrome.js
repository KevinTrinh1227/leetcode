/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  // LOL not sure why I did it this way
  let numsArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  let oldStr = "";
  let newStr = "";

  for (let i = 0; i < s.length; i++) {
    if (
      s[i].toUpperCase() != s[i].toLowerCase() ||
      numsArray.includes(s[i]) == true
    ) {
      oldStr += s[i].toLowerCase();
    }
  }

  newStr = oldStr.split("").reverse().join("");

  if (oldStr == newStr) {
    return true;
  } else {
    return false;
  }
};
