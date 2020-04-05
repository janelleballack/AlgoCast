// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
//  helper variables 
// a character map is an object where we take every character out of a string  added as a key to the object,then the value for each for that key is the number of times that letter has been found in the string.
 const charMap = {}; 
 let mostChar = 0; // variable to compare if character has more uses.
 let maxChar = ''; // set as empty string to be update with new maximum character.

// So we'll save for let char of string and then for every character that we receive we will add an entry to Character Map and if an entry already exists there.

 for (let char of str) {
   if(charMap[char]) {
     charMap[char]++; // increment by 1
   } else {
     charMap[char] = 1;
   }
 }

 //Iterate through the character map if we ever find a character that has more uses than mostChar. Then we'll set mostChar equal to that new value and we'll set mostChar char to a character that was responsible for that number of uses.
// for...in loop - iterate of objects.
for (let char in charMap) {
   if (charMap[char] > mostChar) {
      mostChar = charMap[char];
      maxChar = char;
   }
 }
 return maxChar;
}

module.exports = maxChar;

