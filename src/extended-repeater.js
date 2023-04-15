const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	if (typeof str === 'undefined') str = '';
	if (typeof options === 'undefined') options = {};
	if (typeof options.repeatTimes === 'undefined') options.repeatTimes = 1;
	if (typeof options.separator === 'undefined') options.separator = '+';
	if (typeof options.addition === 'undefined') options.addition = '';
	if (typeof options.additionRepeatTimes === 'undefined') options.additionRepeatTimes = 1;
	if (typeof options.additionSeparator === 'undefined') options.additionSeparator = '|';
	let massStr = [];
	let massAdition = [];
	let massFinal = [];
 
	// Repeat the main string
	for (let i = 0; i < options.repeatTimes; i++) {
	  massStr.push(String(str));
	}
 
	// Add the additional string
	for (let i = 0; i < options.additionRepeatTimes; i++) {
	  massAdition.push(String(options.addition));
	}
 
	// Combine the additional string with its separator
	let adSeparator = options.additionSeparator ? options.additionSeparator : "|";
	let adStr = massAdition.join(adSeparator);
 
	// Combine the main string and additional string
	for (let i = 0; i < options.repeatTimes; i++) {
	  massFinal.push(massStr[i] + adStr);
	}
 
	// Add the separator between the repeated strings
	let separator = options.separator ? options.separator : "+";
	let result = massFinal.join(separator);
 
	return result;
 }



module.exports = {
  repeater
};
