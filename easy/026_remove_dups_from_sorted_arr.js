/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 1;
  let j = i;

  while (j < nums.length) {
    if (nums[j] != nums[j - 1]) {
      nums[i] = nums[j];
      i++;
      j++;
      while (nums[j] == nums[j - 1] && j < nums.length) {
        j++;
      }
    } else {
      j++;
      while (nums[j] == nums[j - 1] && j < nums.length) {
        j++;
      }
    }
  }

  console.log(nums);
  console.log(i);
  return i;
};
