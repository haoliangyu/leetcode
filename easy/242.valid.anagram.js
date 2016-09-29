// Given two strings s and t, write a function to determine if t is an anagram of s.
//
// For example,
// s = "anagram", t = "nagaram", return true.
// s = "rat", t = "car", return false.
//
// Note:
// You may assume the string contains only lowercase alphabets.
//
// Follow up:
// What if the inputs contain unicode characters? How would you adapt your solution to such case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) {
        return false;
    }

    var dict = [];
    var code, temp;

    for (var i = 0, n  = s.length; i < n; i++) {
        code = s.charCodeAt(i);
        temp = dict[code];
        dict[code] = temp ? temp + 1 : 1;
    }

    for (var j = 0; j < n; j++) {
        code = t.charCodeAt(j);
        temp = dict[code];

        if (!temp || temp <= 0) {
            return false;
        }

        dict[code] -= 1;
    }

    return true;
};
