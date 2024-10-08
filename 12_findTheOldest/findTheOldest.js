const findTheOldest = function (persons) {


    const personWithAges = persons.map(person => {
        age = (person.yearOfDeath || new Date().getFullYear()) - person.yearOfBirth
        return { name: person.name, age: age }
    })




    let max = 0;
    for (let person of personWithAges) {
        person.age > max ? max = person.age : max
    }
    return personWithAges.find(person => person.age === max)

};


console.log(findTheOldest([
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
]));


// Do not edit below this line
module.exports = findTheOldest;
