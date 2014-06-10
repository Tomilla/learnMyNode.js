/*
  #Count characters in your string

  Description:

    The main idea is to count all the occuring characters(UTF-8) in /
  string. If you have string like this aba then the result should be /
  { 'a': 2, 'b': 1 }

  What if the string is empty ? Then the result should be empty object /
  literal {}
*/

/*
 * My Solution
 *
  function count (string) {
  if (!string) return {};
  var idx
    , char = ''
    , result = {}
    , strArr = [].slice.call(string);

  for (idx = 0; idx < strArr.length; idx++) {
    char = strArr[idx];
    if (result.hasOwnProperty(char)) {
      result[char]++;
    } else {
      result[char] = 1;
    }
  }
  return result;
  }
*/

/*
 * normal solution with comments
 *
  function count (string) {
    var strLength = string.length;
    var result = {};
    // Check the string's length whether it is equals to 0
    if(strLength != 0) {
      for (var i = 0; i < strLength; i++) { // Iterate the string
        var char = string.charAt(i);
        // Check whether the character is already in the object
        if (result.hasOwnProperty(char)) {
          // If yes, we augment the occurrence times
          result[char]++;
        } else {
          // If not, we add it to the "return" object's property
          result[char] = 1;
        }
      }
    }
    return result;
  }
*/

/*
 * Best Practice
 *
  function count (string) {
    var count = {};
    string.split('').forEach(function(s) {
      count[s] ? count[s]++ : count[s] = 1;
    });
    return count;
  }
*/

ref.via:[CodeWar][1]
[1]:(codewars.com/kata/52efefcbcdf57161d4000091/solutions/javascript)
