const removeFromArray = function (array, ...rest) {

    return array.filter(item => {
        return !rest.includes(item)
    })

};


// Do not edit below this line
module.exports = removeFromArray;
