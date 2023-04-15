const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
	if (date === undefined) {
		return 'Unable to determine the time of year!';
	}
	if (
		!(
			date instanceof Date &&
			typeof date.getMonth === 'function' && typeof date.getDate === 'function' &&
			typeof date.getFullYear === 'function' && typeof date.toString === 'function'
		)
	) {
		throw new Error('Invalid date!');
	}
	const month = date.getMonth();
	const day = date.getDate();
	const year = date.getFullYear();
	let februaryDays = 28;
	let otherHyDays = 30;
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
		februaryDays = 29;
		otherHyDays = 31;
	}
	if (
		(month == 2 && day >= 1 && day <= 31) ||
		(month == 3 && day >= 1 && day <= otherHyDays) ||
		(month == 4 && day >= 1 && day <= 31)
	) {
		//М А М
		return 'spring';
	} else if (
		(month == 5 && day >= 1 && day <= otherHyDays) ||
		(month == 6 && day >= 1 && day <= 31) ||
		(month == 7 && day >= 1 && day <= 31)
	) {
		//И И А
		return 'summer';
	} else if (
		(month == 8 && day >= 1 && day <= otherHyDays) ||
		(month == 9 && day >= 1 && day <= 31) ||
		(month == 10 && day >= 1 && day <= otherHyDays)
	) {
		// С О Н
		return 'autumn';
	} else if (
		(month == 11 && day >= 1 && day <= 31) ||
		(month == 0 && day >= 1 && day <= 31) ||
		(month == 1 && day >= 1 && day <= februaryDays)
	) {
		// Д Я Ф
		return 'winter';
	} else {
		throw new Error('Invalid date!');
	}
}



module.exports = {
	getSeason
};
