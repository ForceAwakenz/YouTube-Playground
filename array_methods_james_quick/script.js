'use strict'

const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];


// =============   Array.filter()

const allHeavy = characters.filter(character => character.mass >= 100);
// console.log('All Heavy: ', allHeavy);

const allUnderTwoHundred = characters.filter(function (character) {
    if (character.height <= 200) {
        return true;    
    }
})
// console.log('All Under 200: ', allUnderTwoHundred);

const allMale = characters.filter(function (character) {
    if (character.gender === 'male') return true;
})
// console.log('All Male: ', allMale);

const allFemale = characters.filter(element => element.gender === 'female');
// console.log('All Female: ', allFemale);


// =============   Array.map()

const allNames = characters.map(character => character.name);
console.log(allNames);

const allHeights = characters.map(character => character.height);
console.log(allHeights);

const namesAndHeights = characters.map(character => ({
    height: character.height,
    name: character.name
    
})
);

console.log(namesAndHeights);

const firstNames = characters.map(character => character.name.split(' ')[0]);
console.log(firstNames);


// =============   Array.sort()

const arrSortedByMass = characters.sort((a, b) => a.mass - b.mass);
console.log(arrSortedByMass);



// =============   Array.reduce()

const totalMass = characters.reduce((acc, cur) => +acc + +cur.mass, 0);
console.log('total mass: ' + totalMass);

const totalHeight = characters.reduce((acc, cur) => +acc + +cur.height, 0);
console.log('total height: ' + totalHeight);

const eyeColor = characters.filter(char => char.eye_color).reduce((acc, cur) => acc += 1 , '');
const eyeColor2 = characters.filter(char => char.eye_color).reduce((acc, cur) => ++acc, '');

console.log(eyeColor);
console.log(eyeColor2);

const charactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if (acc[color]) {
        acc[color]++;
    } else {
        acc[color] = 1;
    }
    return acc;
}, {}); // starting from array makes things right
console.log(charactersByEyeColor);

//-----------------
let string1 = '22';
string1 += 1;
string1++;
// console.log(string1); // 222
//-----------------








