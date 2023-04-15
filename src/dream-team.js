const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
	
	// Проверка входных параметров
	if (!Array.isArray(members)) {
	  return false;
	}
 
	// Фильтрация массива и преобразование каждого элемента
	const teamNames = members
	  .filter((member) => typeof member === 'string')
	  .map((member) => member.trim().charAt(0).toUpperCase());
 
	// Сортировка и объединение названий команды
	return teamNames.sort().join('');
 }

module.exports = {
  createDreamTeam
};
