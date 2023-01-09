//https://leetcode.com/problems/roman-to-integer/

/*
Input: s = "III"
Output: 3
Explanation: III = 3.
*/

const romanToInteger = function (s) {
  const map = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000,
  }
  let integer = 0;
  for (let i = 0; i < s.length; i++) {
    let curr = map[s[i]];
    let next = map[s[i+1]]

    if (curr < next) {
      integer += next - curr;
      i++
    }else{
      integer += curr;
    }
  }
  return integer;
};

console.log(romanToInteger('III'));
