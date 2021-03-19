/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 *
 * https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/
 *
 * algorithms
 * Easy (46.63%)
 * Likes:    3632
 * Dislikes: 6626
 * Total Accepted:    1.3M
 * Total Submissions: 2.9M
 * Testcase Example:  '[1,1,2]'
 *
 * Given a sorted array nums, remove the duplicates in-place such that each
 * element appears only once and returns the new length.
 *
 * Do not allocate extra space for another array, you must do this by modifying
 * the input array in-place with O(1) extra memory.
 *
 * Clarification:
 *
 * Confused why the returned value is an integer but your answer is an array?
 *
 * Note that the input array is passed in by reference, which means a
 * modification to the input array will be known to the caller as well.
 *
 * Internally you can think of this:
 *
 *
 * // nums is passed in by reference. (i.e., without making a copy)
 * int len = removeDuplicates(nums);
 *
 * // any modification to nums in your function would be known by the caller.
 * // using the length returned by your function, it prints the first len
 * elements.
 * for (int i = 0; i < len; i++) {
 * print(nums[i]);
 * }
 *
 *
 * Example 1:
 *
 *
 * Input: nums = [1,1,2]
 * Output: 2, nums = [1,2]
 * Explanation: Your function should return length = 2, with the first two
 * elements of nums being 1 and 2 respectively. It doesn't matter what you
 * leave beyond the returned length.
 *
 *
 * Example 2:
 *
 *
 * Input: nums = [0,0,1,1,1,2,2,3,3,4]
 * Output: 5, nums = [0,1,2,3,4]
 * Explanation: Your function should return length = 5, with the first five
 * elements of nums being modified to 0, 1, 2, 3, and 4 respectively. It
 * doesn't matter what values are set beyond the returned length.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= nums.length <= 3 * 10^4
 * -10^4 <= nums[i] <= 10^4
 * nums is sorted in ascending order.
 *
 *
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let ret = NaN;

    // 2021-03-19
    // 解题思路：遍历数组，并查看下一个值是否与当前值重复，如果是，则将当前位与之后的所有位都前移一位
    // 时间复杂度：未知
    // 空间复杂度：未知
    const length = nums.length;

    for (let i = 0; i < length; i++) {
        const n1 = nums[i];
        const n2 = nums[i - 1];

        if (n1 === n2) { // 查看下一个值是否与当前值重复
            // 将当前位与之后的所有位都前移一位
            for (let j = i; j < length - 1; j++) {
                nums[j] = nums[j + 1];
            }

            nums[length - 1] = undefined; // 将末位的值填充为 undefined
            i--; // 因为被前移了一位，当前位的值并没有被处理过，所以需要重复处理当前位
        }

        // 如果当前值为 undefined，说明有效的位已被处理完，此时应该结束处理并返回新数组长度
        if (n1 === undefined) {
            ret = i;
            break;
        }

        // 如果当前位为数组最后一位，说明有效的位已被处理完，此时应该结束处理并返回新数组长度
        if (i === length - 1) {
            ret = i + 1;
        }
    }

    return ret;
};
// @lc code=end
