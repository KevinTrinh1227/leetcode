/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  let someSet = new Set(nums);
  let longestCount = 0;
  let currCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (someSet.has(nums[i] - 1) == false) {
      currCount = 0;
      while (someSet.has(nums[i] + currCount)) {
        currCount++;
      }
      if (currCount > longestCount) {
        longestCount = currCount;
      }
    }
  }

  return longestCount;
};
