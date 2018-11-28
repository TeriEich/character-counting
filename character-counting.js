var letterCount = {};

  function countLetters (str) {
    var newStr = str.split(" ").join("").toLowerCase();
    var input = newStr.split("");

    for (i = 0; i < input.length; i++) {
      var letter = input[i];

      if (letter in letterCount) {
        letterCount[letter] += 1;
      } else {
        letterCount[letter] = 1;
      }
    }

  return letterCount;
 }


//test lines:
console.log(countLetters("lighthouse in the House"));


//get string
//separate letters and make object keys
//count instances of each letter - key: amt
//add to object key value