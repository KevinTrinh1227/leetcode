/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let words = new Map();

  for (let i = 0; i < strs.length; i++) {
    let wordID = Array(26).fill(0);

    for (j = 0; j < strs[i].length; j++) {
      let charIDX = strs[i][j].charCodeAt() - "a".charCodeAt();
      wordID[charIDX] += 1 + wordID[charIDX];
    }

    wordID = wordID.join("");
    if (words.has(wordID)) {
      let currWords = words.get(wordID);
      currWords.push(strs[i]);
      words.set(wordID, currWords);
    } else {
      words.set(wordID, [strs[i]]);
    }
  }

  console.log(words);

  let output = [];
  for (let [key, value] of words) {
    output.push(value);
  }

  return output;
};
