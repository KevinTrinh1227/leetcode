/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  // new method use a hashmap because hashmap is the answer to everything (:

  // MY FIRST EVER MEDIUM CODING PROBLEM SOLVED UNDER 20 MINUTES!!!! LEZZGOOOO

  // Basically if the hash already has the num[i] we dont calc the product.
  // so thats how I got passed the edge case with a million different -1's

  let someHash = new Map();
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (someHash.has(nums[i])) {
      res.push(someHash.get(nums[i]));
    } else {
      let product = 1;
      for (let j = 0; j < nums.length; j++) {
        if (i != j) {
          if (nums[j] == 0) {
            product = 0;
            break;
          } else {
            product *= nums[j];
          }
        }
      }
      someHash.set(nums[i], product);
      res.push(product);
    }
  }

  return res;
};
