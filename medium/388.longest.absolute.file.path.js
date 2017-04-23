// Suppose we abstract our file system by a string in the following manner:
//
// The string "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext" represents:
//
// dir
//     subdir1
//     subdir2
//         file.ext
//
// The directory dir contains an empty sub-directory subdir1 and a sub-directory subdir2 containing a file file.ext.
//
// The string "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext" represents:
//
// dir
//     subdir1
//         file1.ext
//         subsubdir1
//     subdir2
//         subsubdir2
//             file2.ext
//
// The directory dir contains two sub-directories subdir1 and subdir2. subdir1 contains a file file1.ext and an empty second-level sub-directory subsubdir1. subdir2 contains a second-level sub-directory subsubdir2 containing a file file2.ext.
//
// We are interested in finding the longest (number of characters) absolute path to a file within our file system. For example, in the second example above, the longest absolute path is "dir/subdir2/subsubdir2/file2.ext", and its length is 32 (not including the double quotes).
//
// Given a string representing the file system in the above format, return the length of the longest absolute path to file in the abstracted file system. If there is no file in the system, return 0.
//
// Note:
//
//     The name of a file contains at least a . and an extension.
//     The name of a directory or sub-directory will not contain a ..
//
// Time complexity required: O(n) where n is the size of the input string.
//
// Notice that a/aa/aaa/file1.txt is not the longest file path, if there is another path aaaaaaaaaaaaaaaaaaaaa/sth.png.

/**
 * @param {string} input
 * @return {number}
 */
let lengthLongestPath = function(input) {

  if (input === '') {
    return 0;
  }

  input = '\n' + input;

  let path = [0];
  let maxLength = 0;
  let prevLevel = -1;
  let isLevelSign = (char) => char === '\t';
  let notNextLevel = (char) => char !== '\n' && char !== undefined;

  // per level
  for (let i = 0, n = input.length; i < n;) {
    // skip "\n"
    i++;

    // get current level
    let currentLevel = slice(input, i, isLevelSign).length;

    // skip "\t"
    i += currentLevel;

    // get current level length
    let fileName = slice(input, i, notNextLevel);
    let isFile = fileName.indexOf('.') > -1;
    let currentLevelLength = fileName.length;

    // skip chars
    i += currentLevelLength;

    if (currentLevel === prevLevel) {
      // file path at the same level
      path[path.length - 1] = currentLevelLength + path[path.length - 2];
    } else {
      if (currentLevel < prevLevel) {
        // file path at the previous level
        for (let j = currentLevel; j <= prevLevel; j++) {
          path.pop();
        }
      }

      path.push(currentLevelLength + path[path.length - 1]);
    }

    prevLevel = currentLevel;

    // check if the current level max is the global max
    if (path[path.length - 1] + path.length - 2 > maxLength && isFile) {
      maxLength = path[path.length - 1] + path.length - 2;
    }
  }

  return maxLength;
};

function slice(input, start, condition) {
  let j = start;

  while (condition(input[j])) {
    j++;
  }

  return input.substring(start, j);
}
