/*
 * @lc app=leetcode id=4 lang=javascript
 *
 * [4] Median of Two Sorted Arrays
 *
 * https://leetcode.com/problems/median-of-two-sorted-arrays/description/
 *
 * algorithms
 * Hard (31.15%)
 * Likes:    9421
 * Dislikes: 1454
 * Total Accepted:    881.2K
 * Total Submissions: 2.8M
 * Testcase Example:  '[1,3]\n[2]'
 *
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return
 * the median of the two sorted arrays.
 *
 *
 * Example 1:
 *
 *
 * Input: nums1 = [1,3], nums2 = [2]
 * Output: 2.00000
 * Explanation: merged array = [1,2,3] and median is 2.
 *
 *
 * Example 2:
 *
 *
 * Input: nums1 = [1,2], nums2 = [3,4]
 * Output: 2.50000
 * Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 *
 *
 * Example 3:
 *
 *
 * Input: nums1 = [0,0], nums2 = [0,0]
 * Output: 0.00000
 *
 *
 * Example 4:
 *
 *
 * Input: nums1 = [], nums2 = [1]
 * Output: 1.00000
 *
 *
 * Example 5:
 *
 *
 * Input: nums1 = [2], nums2 = []
 * Output: 2.00000
 *
 *
 *
 * Constraints:
 *
 *
 * nums1.length == m
 * nums2.length == n
 * 0 <= m <= 1000
 * 0 <= n <= 1000
 * 1 <= m + n <= 2000
 * -10^6 <= nums1[i], nums2[i] <= 10^6
 *
 *
 *
 * Follow up: The overall run time complexity should be O(log (m+n)).
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let ret = NaN;

    // 2021-03-13
    // 解题思路：同时遍历两个数组，并将数值按照从小到大的顺序逐个添加到合并数组，最后计算出结果
    // 时间复杂度：未知
    // 空间复杂度：未知
    let array = [];
    let i = 0, j = 0;

    // 如果第一个数组为空，则将第二个数组的所有数值添加到合并数组
    if (nums1.length === 0) array.push(...nums2);

    // 错误边界：
    // 如果第一个数组为空，则循环体不会执行
    // 两个数组可能会有一方先被处理完，剩下的所有数值也需要被添加
    for (; i < nums1.length; i++) {
        let n1 = nums1[i];

        for (; j < nums2.length; j++) {
            let n2 = nums2[j];

            if (n1 <= n2) { // 如果第二个数值更大，则尝试跳过本轮第二个数组的处理
                if (i === nums1.length - 1) { // 如果第一个数组即将被处理完，则先将第二个数组处理完
                    array.push(n1, n2); // 因为第一个数值会被修改，而第二个数值会被标记为已添加，所以先将两个数值都添加到合并数组
                    n1 = Infinity; // 然后将第一个数值赋值为正无穷大，这样会使第二个数组剩下的所有数值都被添加到合并数组
                    continue;
                } else { // 如果第一个数组还没有被处理完，则跳过本轮第二个数组的处理
                    break;
                }
            } else { // 如果第一个数值更大，则将第二个数值添加到合并数组
                array.push(n2);
            }
        }

        // 如果第一个数值不是正无穷大，说明并没有被提前添加过，则将该数值添加到合并数组
        if (n1 !== Infinity) array.push(n1);
    }

    const length = array.length;

    if (length % 2 === 0) {
        // 取出中间相邻的两个数值
        ret = (array[length / 2 - 1] + array[length / 2]) / 2;
    } else {
        // 取出正中间的数值
        ret = array[(length - 1) / 2];
    }

    return ret;
};
// @lc code=end
