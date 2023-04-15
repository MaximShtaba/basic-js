const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
	constructor(direct = true) {
	  this.direct = direct;
	}
 
	encrypt(message, key) {
	  if (!message || !key) {
		 throw new Error('Incorrect arguments!');
	  }
 
	  message = message.toUpperCase();
	  key = key.toUpperCase();
 
	  const messageLen = message.length;
	  const keyLen = key.length;
 
	  let result = '';
	  let j = 0;
 
	  for (let i = 0; i < messageLen; i++) {
		 const messageCharCode = message.charCodeAt(i);
 
		 if (messageCharCode < 65 || messageCharCode > 90) {
			result += message[i];
			continue;
		 }
 
		 const keyCharCode = key.charCodeAt(j % keyLen);
		 const shift = keyCharCode - 65;
 
		 const encodedCharCode = ((messageCharCode - 65 + shift) % 26) + 65;
		 result += String.fromCharCode(encodedCharCode);
 
		 j++;
	  }
 
	  return this.direct ? result : result.split('').reverse().join('');
	}
 
	decrypt(encryptedMessage, key) {
	  if (!encryptedMessage || !key) {
		 throw new Error('Incorrect arguments!');
	  }
 
	  encryptedMessage = encryptedMessage.toUpperCase();
	  key = key.toUpperCase();
 
	  const encryptedMessageLen = encryptedMessage.length;
	  const keyLen = key.length;
 
	  let result = '';
	  let j = 0;
 
	  for (let i = 0; i < encryptedMessageLen; i++) {
		 const encryptedCharCode = encryptedMessage.charCodeAt(i);
 
		 if (encryptedCharCode < 65 || encryptedCharCode > 90) {
			result += encryptedMessage[i];
			continue;
		 }
 
		 const keyCharCode = key.charCodeAt(j % keyLen);
		 const shift = keyCharCode - 65;
 
		 const decodedCharCode = ((encryptedCharCode - 65 - shift + 26) % 26) + 65;
		 result += String.fromCharCode(decodedCharCode);
 
		 j++;
	  }
 
	  return this.direct ? result : result.split('').reverse().join('');
	}
 }

module.exports = {
  VigenereCipheringMachine
};
