const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
	const numRows = matrix.length;
	const numCols = matrix[0].length;
	const result = [];
 
	for (let i = 0; i < numRows; i++) {
	  const row = [];
	  for (let j = 0; j < numCols; j++) {
		 let count = 0;
		 for (let rowOffset = -1; rowOffset != 2; rowOffset++) {
			for (let colOffset = -1; colOffset != 2; colOffset++) {
			  if (rowOffset === 0 && colOffset === 0) {
				 continue;
			  }
 
			  const rowToCheck = i + rowOffset;
			  const colToCheck = j + colOffset;
			  if (
				 rowToCheck >= 0 &&
				 rowToCheck < numRows &&
				 colToCheck >= 0 &&
				 colToCheck < numCols &&
				 matrix[rowToCheck][colToCheck]
			  ) {
				 count++;
			  }
			}
		 }
		 row.push(count);
	  }
	  result.push(row);
	}
 
	return result;
 }

module.exports = {
	minesweeper
};
