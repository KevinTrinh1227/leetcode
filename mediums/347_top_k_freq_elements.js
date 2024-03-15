/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let numsCount = new Map();
  let freq = [];
  for (let idx = 0; idx < nums.length + 1; idx++) {
    freq.push([]);
  }

  for (let i = 0; i < nums.length; i++) {
    if (numsCount.has(nums[i])) {
      numsCount.set(nums[i], numsCount.get(nums[i]) + 1);
    } else {
      numsCount.set(nums[i], 1);
    }
  }

  for (let [key, value] of numsCount) {
    //console.log(`Appending ${key}`)
    freq[value].push(key);
    //console.log(freq)
  }

  let output = [];
  for (let j = freq.length - 1; j >= 0; j--) {
    for (let n = 0; n < freq[j].length; n++) {
      output.push(freq[j][n]);
      if (output.length == k) {
        return output;
      }
    }
  }
};
