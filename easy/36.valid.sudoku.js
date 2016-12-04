// Determine if a Sudoku is valid, according to: Sudoku Puzzles - The Rules.
//
// The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
//
//
// A partially filled sudoku which is valid.
//
// Note:
// A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.

/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  let check = new Array(9);
  let size = board[0].length;

  // check for each row
  for (let i = 0; i < size; i++) {
    check.fill(false);

    for (let j = 0; j < size; j++) {
      let value = board[i][j];
      if (value === '.') { continue; }

      if (check[value]) {
        return false;
      } else {
        check[value] = true;
      }
    }
  }

  // check for each column
  for (let j = 0; j < size; j++) {
    check.fill(false);

    for (let i = 0; i < size; i++) {
      let value = board[i][j];
      if (value === '.') { continue; }

      if (check[value]) {
        return false;
      } else {
        check[value] = true;
      }
    }
  }

  // check for each block
  for (let i = 1; i < size; i += 3) {
    for (let j = 1; j < size; j += 3) {
      check.fill(false);

      for (let a = -1; a <= 1; a++) {
        for (let b = -1; b <= 1; b++) {
          let value = board[i + a][j + b];
          if (value === '.') { continue; }

          if (check[value]) {
            return false;
          } else {
            check[value] = true;
          }
        }
      }
    }
  }

  return true;
};
