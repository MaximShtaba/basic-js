const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
	let count = 0;
	let s1mass = s1.split("");
	let s2mass = s2.split("");
 
	for (let i = 0; i < s1mass.length; i++) {
	  if (s2mass.includes(s1mass[i])) {
		 count++;
		 s2mass.splice(s2mass.indexOf(s1mass[i]), 1);
	  }
	}
 
	return count;
 }

module.exports = {
  getCommonCharacterCount
};
