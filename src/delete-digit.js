const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let str = n.toString();
	let mass = [];
	 for (let i=0; i<str.length; i++){
		mass.push(Number(str.substr(0,i)+str.substr(i+1,str.length)))
	 }
	 mass.sort((a,b)=> b-a);
	 return(mass[0])
  }

module.exports = {
  deleteDigit
};
