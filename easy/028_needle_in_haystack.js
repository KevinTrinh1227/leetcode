/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  // LOL this does work but kinda feels like im cheating...
  // return haystack.indexOf(needle);

  for (let i = 0; i < haystack.length; i++) {
    if (
      haystack[i] == needle[0] &&
      haystack[i + needle.length - 1] == needle[needle.length - 1]
    ) {
      let temp = "";
      for (let j = i; j < i + needle.length; j++) {
        temp += haystack[j];
      }
      console.log(temp);
      if (temp == needle) {
        return i;
      }
    }
  }

  return -1;
};
