const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
	if (!Array.isArray(arr)) {
		 throw new Error("'arr' parameter must be an instance of the Array!");
	}

	const transformedArr = [];

	for (let i = 0; i < arr.length; i++) {
		 const curr = arr[i];
		 const next = arr[i + 1];
		 const prev = transformedArr[transformedArr.length - 1];

		 switch (curr) {
			  case "--discard-next":
					if (i < arr.length - 1) {
						 i++;
					} else {
						 return transformedArr;
					}
					break;
			  case "--discard-prev":
					if (transformedArr.length > 0 && prev !== undefined && prev !== null) {
						 transformedArr.pop();
					}
					break;
			  case "--double-next":
					if (next !== undefined && next !== null) {
						 transformedArr.push(next);
					}
					break;
			  case "--double-prev":
					if (transformedArr.length > 0 && prev !== undefined && prev !== null) {
						 transformedArr.push(prev);
					}
					break;
			  default:
					transformedArr.push(curr);
					break;
		 }
	}

	return transformedArr;
}
 
module.exports = {
  transform
};
