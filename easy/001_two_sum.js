/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  let someMap = new Map();

  for (let i = 0; i < nums.length; i++) {
    let complement = target - nums[i];
    if (someMap.has(complement)) {
      return [i, someMap.get(complement)];
    } else {
      someMap.set(nums[i], i);
    }
  }
};
