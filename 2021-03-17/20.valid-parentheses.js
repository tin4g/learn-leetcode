/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 *
 * https://leetcode.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (39.91%)
 * Likes:    7021
 * Dislikes: 290
 * Total Accepted:    1.3M
 * Total Submissions: 3.4M
 * Testcase Example:  '"()"'
 *
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and
 * ']', determine if the input string is valid.
 *
 * An input string is valid if:
 *
 *
 * Open brackets must be closed by the same type of brackets.
 * Open brackets must be closed in the correct order.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: s = "()"
 * Output: true
 *
 *
 * Example 2:
 *
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 *
 * Example 3:
 *
 *
 * Input: s = "(]"
 * Output: false
 *
 *
 * Example 4:
 *
 *
 * Input: s = "([)]"
 * Output: false
 *
 *
 * Example 5:
 *
 *
 * Input: s = "{[]}"
 * Output: true
 *
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 10^4
 * s consists of parentheses only '()[]{}'.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let ret = false;

    // 2021-03-17
    // 解题思路：遍历字符串，并将当前符号与左边相邻的符号进行匹配，如果不匹配，则先处理右边相邻的符号，最后判断符号序列是否完全匹配
    // 时间复杂度：未知
    // 空间复杂度：未知
    const array = [];
    const table = { "(": ")", "{": "}", "[": "]" };

    for (let i = 0; i < s.length; i++) {
        const string = s[i];

        if (table[array[array.length - 1]] === string) { // 将当前符号与左边相邻的符号进行匹配，如果匹配，则标记为已处理
            array.pop();
        } else { // 将当前符号与左边相邻的符号进行匹配，如果不匹配，则先处理右边相邻的符号
            array.push(string);
        }
    }

    // 如果栈为空，则说明符号序列是完全匹配的
    ret = array.length === 0;

    return ret;
};
// @lc code=end
