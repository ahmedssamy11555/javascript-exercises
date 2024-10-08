const palindromes = function (word) {

    const normalWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('')
    return normalWord.join("") === normalWord.reverse().join("")


};

// Do not edit below this line
module.exports = palindromes;
