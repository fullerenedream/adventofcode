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
// var input = fs.readFileSync("./input.txt", "utf-8");
var input = fs.readFileSync("./testInput.txt", "utf-8"); // TESTING ONLY

// console.log(input);

// split input into an array where each line of input is an array element
var allLinesArray = input.split("\n")

// remove empty element at end of array - it was a newline that was auto-added at end of file
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
console.log(messageArray);

for (i = 0; i < allLinesArray.length; i++) {
  // console.log(allLinesArray[i]);

  // split each line into its own array
  var currentLineArray  = allLinesArray[i].split('');
  console.log('line ' + i + ': ' + currentLineArray);

  for (j = 0; j < currentLineArray.length; j++) {
    console.log(currentLineArray[j]);
    // push each character onto its corresponding array in messageArray
    messageArray[j].push(currentLineArray[j]);
  }
}

// // test print messageArray
// for (i = 0; i < messageArray.length; i++) {
//   console.log('messageArray[' + i + ']:' + messageArray[i]);
//   console.log('messageArray[' + i + '].length:' + messageArray[i].length);
// }

// console.log('allLinesArray.length:' + allLinesArray.length);

function getLetterFrequencies(letterCandidatesArray) {
  // count frequency of each letter in array
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

function logLetterFrequencies(letterFrequencies) {
  for (var letter in letterFrequencies) {
    console.log('frequency of ' + letter + " = " + letterFrequencies[letter]);
  }
}

function getMostFrequentLetter(letterFrequencies) {
  var maxFrequency = 0;
  var mostFrequentLetter = '';
  for (var letter in letterFrequencies) {
    console.log('letter: ' + letter);
    if (letterFrequencies[letter] > maxFrequency) {
      maxFrequency = letterFrequencies[letter];
      console.log('maxFrequency: ' + maxFrequency);
      mostFrequentLetter = letter;
      console.log('mostFrequentLetter: ' + mostFrequentLetter);
    }
  }
  return mostFrequentLetter;
}

var correctedMessageArray = [];

for (var i = 0; i < messageArray.length; i++) {
  console.log('Frequencies for position ' + i + ':');
  var letterFrequencies = getLetterFrequencies(messageArray[i]);
  // logLetterFrequencies(letterFrequencies);
  correctedMessageArray.push(getMostFrequentLetter(letterFrequencies));
  console.log('correctedMessageArray: ' + correctedMessageArray);
}

var correctedMessageString = correctedMessageArray.join('');
console.log('correctedMessageString: ' + correctedMessageString);
