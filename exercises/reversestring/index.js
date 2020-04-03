// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'


// Solution - 1 - Reverse Method
// Use The split() method to split a string into an array of substrings, and returns the new array.
// reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first. 
// join() method returns the array as a string.

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// Solution 2 - For loop
// Create an empty string called 'reversed'.
// for each character in the string, take the character and add it to the start of the 'reversed'.
// Return variable reversed.

// function reverse(str) {
//   let reversed = '';

//   // for (let i = 0; i< str.length; i++) {
//   //   reversed = str[i] + reversed;
//   // }

// // ES6
//   for (let character of str) {
//     reversed = character + reversed;
//   }
//   return reversed;
// }


// Solution 3 - Reduce method helper
// Reduce is used to take all the different values with an array and condense them all down to one singular value.
// /Reduce takes 2 arguments
// split() method to split a string into an array of substrings, and returns the new array.
// Return variable reversed.

function reverse(str) {
  return str.split('').reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
