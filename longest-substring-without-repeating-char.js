/**
 * @param {string} s
 * @return {number}
 */
 const lengthOfLongestSubstring = function(s) {
    const n = s.length, hash = {}
    let result = 0
    for (let i = 0, j = 0; i < n; i++) {
      if (hash[s[i]]) j = Math.max(hash[s[i]], j)
      result = Math.max(result, i - j + 1)
      hash[s[i]] = i + 1
    }
    return result
  }
  
  ;[
    'abcabcbb',                   // 3
    'bbbbb',                      // 1
    'pwwkew',                     // 3
    'c',                          // 1
    'dvdf',                       // 3
  ].forEach(s => {
    console.log(lengthOfLongestSubstring(s))
  })