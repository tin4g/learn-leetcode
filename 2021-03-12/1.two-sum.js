/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 *
 * https://leetcode.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (46.54%)
 * Likes:    19703
 * Dislikes: 691
 * Total Accepted:    4M
 * Total Submissions: 8.5M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * Given an array of integers nums and an integer target, return indices of the
 * two numbers such that they add up to target.
 *
 * You may assume that each input would have exactly one solution, and you may
 * not use the same element twice.
 *
 * You can return the answer in any order.
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Output: Because nums[0] + nums[1] == 9, we return [0, 1].
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 *
 *
 * Example 3:
 *
 *
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 *
 *
 *
 * Constraints:
 *
 *
 * 2 <= nums.length <= 10^3
 * -10^9 <= nums[i] <= 10^9
 * -10^9 <= target <= 10^9
 * Only one valid answer exists.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let ret = [NaN, NaN];

    // 2021-03-12
    // 解题思路：遍历数组，并计算出预估的两个数值，最后查找第二个数值是否存在
    // 时间复杂度：未知
    // 空间复杂度：未知
    for (let i = 0; i < nums.length; i++) {
        // 计算出预估的两个数值
        const n1 = nums[i];
        const n2 = target - n1;

        // 查找第二个数值是否存在
        const index = nums.indexOf(n2, i + 1);
        if (index !== -1) return [i, index];
    }

    return ret;
};
// @lc code=end
