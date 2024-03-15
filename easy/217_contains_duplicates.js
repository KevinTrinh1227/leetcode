/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let uniqueNums = new Map();

  for (let i = 0; i < nums.length; i++) {
    if (uniqueNums.has(nums[i])) {
      return true;
    } else {
      uniqueNums.set(nums[i], i);
    }
  }

  return false;
};
