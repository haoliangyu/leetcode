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

function placeOne(ones, hour, minute, timeSet) {

    if (hour > 11 || minute > 59) {
        return;
    }

    if (ones < 1) {
        timeSet.add(hour.toString() + ':' + (minute < 10 ? ('0' + minute.toString()) : minute.toString()));
        return;
    }

    var mask;
    for (var i = 0; i <= 9; i++) {
        if (i < 4) {
            mask = 1 << i;
            if (!((hour & mask) >> i)) {
                placeOne(ones - 1, hour | mask, minute, timeSet);
            }
        } else {
            mask = 1 << (i - 4);
            if (!((minute & mask) >> (i - 4))) {
                placeOne(ones - 1, hour, minute | mask, timeSet);
            }
        }
    }
}

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function(num) {
    var timeSet = new Set([]);

    placeOne(num, 0, 0, timeSet);

    return [...timeSet];
};
