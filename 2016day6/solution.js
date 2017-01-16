// 2016 day 6 solution

// read input file
// parse each line into an array
// make [length of message] number of arrays
// for each line of input file, push each character to its corresponding array

// for each of these new arrays
// count how many there are of each character
// find the most frequent character

// make a string that is the most frequent character from each of the new arrays



var fs = require("fs");
var input = fs.readFileSync("./input.txt", "utf-8");
// var input = fs.readFileSync("./testInput.txt", "utf-8"); // TESTING ONLY
// var input = fs.readFileSync("./testInput2.txt", "utf-8"); // TESTING ONLY

// split input into an array where each line of input is an array element
var allLinesArray = input.split("\n")

/* remove empty element at end of array
it was a newline that is auto-added at end of file */
allLinesArray.pop();

// get message length from length of first element in array
var messageLength = allLinesArray[0].length;
// console.log('first line of input:\n' + allLinesArray[0] + '\n');
// console.log('message length = ' + messageLength);

/* make an array the length of the message, where each element will be
an array of all the characters that were received for that position
in the message */
var messageArray = new Array(messageLength);
for (i = 0; i < messageArray.length; i++) {
  messageArray[i] = [];
}

for (i = 0; i < allLinesArray.length; i++) {
  // console.log(allLinesArray[i]);

  // split each line into its own array
  var currentLineArray  = allLinesArray[i].split('');
  // console.log('line ' + i + ': ' + currentLineArray);
  for (j = 0; j < currentLineArray.length; j++) {
    // console.log(currentLineArray[j]);
    // push each character onto its corresponding array in messageArray
    messageArray[j].push(currentLineArray[j]);
  }
}

// find the frequency of each letter in an array of letters
// returns an object with letters as properties and frequencies as values
function getLetterFrequencies(letterCandidatesArray) {
  var letterFrequencies = {};
  for (var i = 0; i < letterCandidatesArray.length; i++) {
    var letter = letterCandidatesArray[i];
    if (letter in letterFrequencies) {
      letterFrequencies[letter]++;
    }
    else {
      letterFrequencies[letter] = 1;
    }
  }
  return letterFrequencies;
}

// find the letter with highest frequency from letterFrequencies object
function getMostFrequentLetter(letterFrequencies) {
  var maxFrequency = 0;
  var mostFrequentLetter = '';

  for (var letter in letterFrequencies) {
    // console.log('letter: ' + letter);
    if (letterFrequencies[letter] > maxFrequency) {
      maxFrequency = letterFrequencies[letter];
      // console.log('maxFrequency: ' + maxFrequency);
      mostFrequentLetter = letter;
      // console.log('mostFrequentLetter: ' + mostFrequentLetter);
    }
  }
  return mostFrequentLetter;
}

// find the letter with lowest frequency from letterFrequencies object
function getLeastFrequentLetter(letterFrequencies) {
  var minFrequency = 1000000;
  var leastFrequentLetter = '';

  for (var letter in letterFrequencies) {
    // console.log('letter: ' + letter);
    if (letterFrequencies[letter] < minFrequency) {
      minFrequency = letterFrequencies[letter];
      // console.log('minFrequency: ' + minFrequency);
      leastFrequentLetter = letter;
      // console.log('leastFrequentLetter: ' + leastFrequentLetter);
    }
  }
  return leastFrequentLetter;
}

/* construct error-corrected message
from highest- or lowest-frequency letters in each position */
function getMessageByFrequency(highOrLow) {
  var correctedMessage = '';
  var correctedMessageArray = [];

  for (var i = 0; i < messageArray.length; i++) {
    // console.log('Frequencies for position ' + i + ':');
    var letterFrequencies = getLetterFrequencies(messageArray[i]);
    if (highOrLow == 'high') {
      correctedMessageArray.push(getMostFrequentLetter(letterFrequencies));
    }
    else if (highOrLow == 'low') {
      correctedMessageArray.push(getLeastFrequentLetter(letterFrequencies));
    }
    // console.log('correctedMessageArray: ' + correctedMessageArray);
  }

  correctedMessage = correctedMessageArray.join('');
  // console.log('correctedMessage: ' + correctedMessage);
  return correctedMessage;
}

console.log('Part 1 answer - message by high frequency method: ' + getMessageByFrequency('high'));
console.log('Part 2 answer - message by low frequency method: ' + getMessageByFrequency('low'));

