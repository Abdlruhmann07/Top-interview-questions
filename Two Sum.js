// https://leetcode.com/problems/two-sum/
/*
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*/

/*
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

time complixties  O(n)
space complixties O(1)
Runtime:116 ms
*/

const twoSum = function (nums, target) {
    let map = {} ;
    
    for(let i = 0 ; i < nums.length; i++) {
        let value = nums[i];
        let compliment = target - value;
        if (map[compliment] !== undefined) {
            return [map[compliment],i];
        }else {
            map[value] = i;
        }
    }
}

/*
time complixties  O(n)
space complixties O(n)
Runtime:69 ms
*/