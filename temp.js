function twoSum(nums, target) {
  let maps = {};
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    console.log('maps[diff]', maps[diff]);
    if (maps[diff] !== undefined) {
      return [i, maps[diff]];
    }
    maps[nums[i]] = i;
  }
  return [];
}
// const result = twoSum([2, 7, 11, 15], 9);

// [anagram, nagaram];

// console.log(result);

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1Hash = {};
  let str2Hash = {};
  for (let i = 0; i < str1.length; i++) {
    str1Hash[str1[i]] = (str1Hash[str1[i]] || 0) + 1;
    str2Hash[str2[i]] = (str2Hash[str2[i]] || 0) + 1;
  }

  for (const keys in str1Hash) {
    if (str1Hash[keys] != str2Hash[keys]) {
      return false;
    }
  }

  return true;
}

// console.log(`Anagram ${isAnagram('fat', 'fta')}`);

function groupAnagrams(strsArr) {
  let grouped = [];
  let anagramFound = false;
  for (let i = 0; i < strsArr.length; i++) {
    anagramFound = false;
    for (let j = 0; j < grouped.length; j++) {
      if (isAnagram(strsArr[i], grouped[j][0])) {
        grouped[j].push(strsArr[i]);
        anagramFound = true;
        break;
      }
    }
    if (!anagramFound) {
      grouped.push([strsArr[i]]);
    }
  }
  return grouped;
}

// const result = groupAnagrams(['act', 'pots', 'tops', 'cat', 'stop', 'hat']);

const result = groupAnagrams(['x', 'x', 'y', 'x', 'yo']);

console.log(result);
