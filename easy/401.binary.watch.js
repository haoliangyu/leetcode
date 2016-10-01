// A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).
//
// Each LED represents a zero or one, with the least significant bit on the right.
//
// Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.
//
// Example:
//
// Input: n = 1
// Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
//
// Note:
//
//     The order of output does not matter.
//     The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
//     The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".

var masks = [1, 2, 4, 8, 16, 32, 64, 128, 256, 512];

function placeOne(current, ones, valueSet) {
    if (ones < 1 && (current & 960) < 768 && (current & 63) < 60) {
        valueSet.add(current);
        return;
    }

    for (var i = 0; i <= 9; i++) {
      var mask = masks[i];
      if (!((current & mask) >> i)) {
          placeOne(current | mask, ones - 1, valueSet);
      }
    }
}

function format(value) {
    var hour = (value & 960) >> 6;
    var minute = value & 63;

    return hour.toString() + ':' + (minute < 10 ? ('0' + minute.toString()) : minute.toString());
}

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var valueSet = new Set([]);

    placeOne(0, num, valueSet);

    var formatted = [];
    for (let value of valueSet.values()) {
        formatted.push(format(value));
    }

    return formatted;
};
