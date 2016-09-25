// Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.
//
// For example:
//
// Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.
//
// Follow up:
// Could you do it without any loop/recursion in O(1) runtime?

function groupDigits(num) {
    if (num < 10) {
        return num;
    }

    var total = 0;
    var i = 10;
    var last = 0;
    var res = 0;

    while (res !== num) {
        res = num % i;
        total += (res - last) / i * 10;
        last = res;
        i *= 10;
    }

    return groupDigits(total);
}

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    return groupDigits(num);
};
