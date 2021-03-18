/*
 * @lc app=leetcode id=344 lang=javascript
 *
 * [344] Reverse String
 *
 * https://leetcode.com/problems/reverse-string/description/
 *
 * algorithms
 * Easy (70.44%)
 * Likes:    2182
 * Dislikes: 755
 * Total Accepted:    984.7K
 * Total Submissions: 1.4M
 * Testcase Example:  '["h","e","l","l","o"]'
 *
 * Write a function that reverses a string. The input string is given as an
 * array of characters s.
 *
 *
 * Example 1:
 * Input: s = ["h","e","l","l","o"]
 * Output: ["o","l","l","e","h"]
 * Example 2:
 * Input: s = ["H","a","n","n","a","h"]
 * Output: ["h","a","n","n","a","H"]
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^5
 * s[i] is a printable ascii character.
 *
 *
 *
 * Follow up: Do not allocate extra space for another array. You must do this
 * by modifying the input array in-place with O(1) extra memory.
 *
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let ret = null;

    // 2021-03-18
    // 解题思路：遍历字符数组，并将当前字符与对应的字符进行交换，直到最中间的一个或相邻的两个字符，最后得到结果
    // 时间复杂度：未知
    // 空间复杂度：未知
    let string = "";

    const length = s.length;

    // 最中间的一个或相邻的两个字符的可用索引值
    const index = length % 2 === 0 ? length / 2 : (length - 1) / 2;

    for (let i = 0; i < index; i++) {
        // 将当前字符与对应的字符进行交换
        string = s[length - 1 - i];
        s[length - 1 - i] = s[i];
        s[i] = string;
    }

    ret = s;

    return ret;
};
// @lc code=end
