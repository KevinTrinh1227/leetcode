/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let k = 0;
  for (let c = 0; c < nums.length; c++) {
    if (nums[c] != val) {
      k++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == val) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] != nums[i]) {
          temp = nums[i];
          nums[i] = nums[j];
          nums[j] = temp;
          break;
        }
      }
    }
  }

  console.log(nums);
  return k;
};
