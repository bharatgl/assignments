/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  let normalisedStr1 = str1.toLowerCase().replace(/[^a-zA-Z!]/g, "");
  let normalisedStr2 = str2.toLowerCase().replace(/[^a-zA-Z!]/g, "");

  let sortedStr1 = normalisedStr1.split("").sort().join("");
  let sortedStr2 = normalisedStr2.split("").sort().join("");

  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
