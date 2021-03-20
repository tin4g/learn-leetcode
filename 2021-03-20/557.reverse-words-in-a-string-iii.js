/*
 * @lc app=leetcode id=557 lang=javascript
 *
 * [557] Reverse Words in a String III
 *
 * https://leetcode.com/problems/reverse-words-in-a-string-iii/description/
 *
 * algorithms
 * Easy (72.10%)
 * Likes:    1393
 * Dislikes: 103
 * Total Accepted:    249.9K
 * Total Submissions: 346.1K
 * Testcase Example:  `"Let's take LeetCode contest"`
 *
 * Given a string s, reverse the order of characters in each word within a
 * sentence while still preserving whitespace and initial word order.
 *
 *
 * Example 1:
 * Input: s = "Let's take LeetCode contest"
 * Output: "s'teL ekat edoCteeL tsetnoc"
 * Example 2:
 * Input: s = "God Ding"
 * Output: "doG gniD"
 *
 *
 * Constraints:
 *
 *
 * 1 <= s.length <= 5 * 10^4
 * s contains printable ASCII characters.
 * s does not contain any leading or trailing spaces.
 * There is at least one word in s.
 * All the words in s are separated by a single space.
 *
 *
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    let ret = "";

    // 2021-03-20
    // 解题思路：遍历字符串，并检查当前字符是否为空格，如果是，则将空格前的一个单词反转，重复该操作，最后得到结果
    // 时间复杂度：未知
    // 空间复杂度：未知
    let index = -1;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === " ") { // 当前字符为空格
            // 反向将字符添加到新字符串
            for (let j = i - 1; j > index; j--) {
                ret += s[j];
            }

            index = i;  // 保存最后一个空格的索引值
            ret += " "; // 将空格添加到新字符串
        } else if (i === s.length - 1) { // 字符串即将被处理完
            // 反向将字符添加到新字符串
            for (let j = i; j > index; j--) {
                ret += s[j];
            }
        } else {
        }
    }

    return ret;
};
// @lc code=end
