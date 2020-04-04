/* --- Directions
* Given a string, return true if the string is a palindrome
* or false if it is not.  Palindromes are strings that
* form the same word if it is reversed. *Do* include spaces
* and punctuation in determining if the string is a palindrome.
* --- Examples:
*   palindrome("abba") === true
  palindrome("abcdefg") === false
*/ 

function palindrome(str) {
  var reverseString = '';
// #Solution1 - For loop - iterate decremently over the length of the strength.

  // for(i = str.length - 1; i >= 0; i--) {
  //   reverseString += str[i];
  //   // console.log(str[i])
  // }
  // // console.log(reverseString);
  // return str === reverseString;
          /*...........*/

// #Solution2 - split(), reverse(), join()
  // reverseString = str.split('').reverse().join('');
  // return str === reverseString;
        /*...........*/

// #Solution3 - every() method checks if all elements in an array pass a test.
  /*   palindrome("abcba") === true
    * Take the first element of the array which is 'a'. 
    * And compare it with the element at the very end. If the two are equal then return TRUE
    * Then for the next element take it and compare it to the second to last value and compare the two and say are the same.
    * Repeat the process throughout the array.
    * For 'c', compare 'c' to itself because it's at the very center we'll then compare 'b' to the previous 'b' and compare the last element to the first one. 
  */

  return str.split('').every((char, i)  => {
    // console.log(str[str.length - i - 1]);
    return char === str[str.length - i - 1];
  });

}

// console.log(palindrome("abba"));
  
module.exports = palindrome;