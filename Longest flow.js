//https://leetcode.com/problems/longest-common-prefix/
/*
Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"

Example 2:

Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
*/

/*
    ['flower','flow','flight'] => loop for each element string to arr
    arr1 -> flower
    arr2 -> flow
    arr3 -> flight
    result = []

    compare each index  is euqal ?  result.push 

    return result.join('')


*/

const longestFlow = function (strs) {
    let Prefix = strs[0];
    for (let i = 1 ; i < strs.length; i++) {
    while (strs[i].indexOf(Prefix) !== 0) {
        Prefix = Prefix.substring(0, Prefix.length - 1);
    }
}
    return Prefix;
};

console.log(longestFlow(['flower','flow','flight']));