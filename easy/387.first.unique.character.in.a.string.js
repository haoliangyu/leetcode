// Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.
//
// Examples:
//
// s = "leetcode"
// return 0.
//
// s = "loveleetcode",
// return 2.
//
// Note: You may assume the string contain only lowercase letters.

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    var index = {};
    var temp, code;

    for(var i = 0, n = s.length; i < n; i++) {
        code = s[i];
        temp = index[code];

        if (temp) {
            index[code] = temp + 1;
        } else {
            index[code] = 1;
        }
    }

    for (var j = 0; j < n; j++) {
        code = s[j];
        temp =  index[code];
        if (temp === 1) {
            return j;
        }
    }

    return -1;
};
