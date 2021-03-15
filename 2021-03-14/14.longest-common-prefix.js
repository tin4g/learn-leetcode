/*
 * @lc app=leetcode id=14 lang=javascript
 *
 * [14] Longest Common Prefix
 *
 * https://leetcode.com/problems/longest-common-prefix/description/
 *
 * algorithms
 * Easy (36.14%)
 * Likes:    3819
 * Dislikes: 2159
 * Total Accepted:    968.8K
 * Total Submissions: 2.7M
 * Testcase Example:  '["flower","flow","flight"]'
 *
 * Write a function to find the longest common prefix string amongst an array
 * of strings.
 *
 * If there is no common prefix, return an empty string "".
 *
 *
 * Example 1:
 *
 *
 * Input: strs = ["flower","flow","flight"]
 * Output: "fl"
 *
 *
 * Example 2:
 *
 *
 * Input: strs = ["dog","racecar","car"]
 * Output: ""
 * Explanation: There is no common prefix among the input strings.
 *
 *
 *
 * Constraints:
 *
 *
 * 0 <= strs.length <= 200
 * 0 <= strs[i].length <= 200
 * strs[i] consists of only lower-case English letters.
 *
 *
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let ret = "";

    // 2021-03-14
    // 解题思路：遍历数组，并计算出相邻两个字符串的最长公共前缀，重复该操作，最后得到结果
    // 时间复杂度：未知
    // 空间复杂度：未知
    for (let i = 0; i < strs.length; i++) {
        // 将第一个字符串默认为最长公共前缀
        if (i === 0) {
            ret = strs[0];
            continue;
        }

        // 当前最长公共前缀
        let string = "";

        for (let j = 0; j < strs[i].length; j++) {
            // 计算出相邻两个字符串的同位字符
            const s1 = strs[i][j];
            const s2 = ret[j];

            if (s1 === s2) { // 如果字符相同，则添加到当前最长公共前缀
                string += s2;
                continue;
            } else { // 如果字符不同，或者任一字符串已处理完，则结束处理
                break;
            }
        }

        ret = string;
    }

    return ret;
};
// @lc code=end
