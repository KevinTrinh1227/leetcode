/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let result = [];

  nums = nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      let sum = nums[i] + nums[j] + nums[k];
      if (sum > 0) {
        k--;
        while (nums[k] == nums[k + 1] && j < k) {
          k--;
        }
      } else if (sum < 0) {
        j++;
        while (nums[j] == nums[j - 1] && j < k) {
          j++;
        }
      } else {
        result.push([nums[i], nums[j], nums[k]]);
        k--;
        while (nums[k] == nums[k + 1] && j < k) {
          k--;
        }
        j++;
        while (nums[j] == nums[j - 1] && j < k) {
          j++;
        }
      }
    }
  }

  return result;
};
