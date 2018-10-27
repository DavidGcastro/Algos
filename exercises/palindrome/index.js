// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  let begining = 0;
  let end = str.length - 1;
  while (begining < end) {
    if (str[end] !== str[begining]) return false;
    begining++;
    end--;
  }

  return true;
}

module.exports = palindrome;
