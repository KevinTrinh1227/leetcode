/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  let closeToOpen = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"],
  ]);

  for (let i = 0; i < s.length; i++) {
    if (closeToOpen.has(s[i]) == true) {
      if (
        stack.length > 0 &&
        stack[stack.length - 1] == closeToOpen.get(s[i])
      ) {
        console.log(`POPPING STACK: ${stack[stack.length - 1]}`);
        stack.pop(stack.length - 1);
      } else {
        return false;
      }
    } else {
      stack.push(s[i]);
      console.log(`NEW STACK: ${stack}`);
    }
  }

  console.log(stack);
  if (stack.length == 0) {
    return true;
  } else {
    return false;
  }
};
