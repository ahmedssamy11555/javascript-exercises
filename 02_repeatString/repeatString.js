const repeatString = function (word, repeatCount) {
    let i = 0
    let repeatedSentence = ""
    while (i < repeatCount) {
        repeatedSentence = repeatedSentence.concat(word);
        i++;
    }
    return repeatedSentence

};




// Do not edit below this line
module.exports = repeatString;
