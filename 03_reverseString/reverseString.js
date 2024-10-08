const reverseString = function (normalString) {

    const arrayedString = normalString.split("")
    let start = 0;
    let end = arrayedString.length - 1

    while (start < end) {
        [arrayedString[start], arrayedString[end]] = [arrayedString[end], arrayedString[start]]
        start++
        end--
    }

    return arrayedString.join("")

};


console.log(reverseString("ahmed"));

// Do not edit below this line
module.exports = reverseString;
