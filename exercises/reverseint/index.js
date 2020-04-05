// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

/** 
* convert number to string
* split string
* reverse string
* join string
* convert to string to number
* flips a +/- number
*/

function reverseInt(n) {
  var reverseNum = n
    .toString()
    .split('')
    .reverse()
    .join('');

  return parseInt(reverseNum) * Math.sign(n);
}

// console.log(reverseInt(15));

module.exports = reverseInt;
