'use strict'

/*

concat: ƒ concat()
copyWithin: ƒ copyWithin()
entries: ƒ entries()
every: ƒ every()
fill: ƒ fill()
filter: ƒ filter()
find: ƒ find()
findIndex: ƒ findIndex()
flat: ƒ flat()
flatMap: ƒ flatMap()
forEach: ƒ forEach()
includes: ƒ includes()
indexOf: ƒ indexOf()
join: ƒ join()
keys: ƒ keys()
lastIndexOf: ƒ lastIndexOf()
length: 0
map: ƒ map()
pop: ƒ pop()
push: ƒ push()
reduce: ƒ reduce()
reduceRight: ƒ reduceRight()
reverse: ƒ reverse()
shift: ƒ shift()
slice: ƒ slice()
some: ƒ some()
sort: ƒ sort()
splice: ƒ splice()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
unshift: ƒ unshift()
values: ƒ values()
*/

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


  for(let i = 0; i < companies.length; i++) {
    //   console.log(companies[i]);
  }

// Foreach

companies.forEach(function(company, index) {
    // console.log(`${index+1}: ${company.name} category: ${company.category}`);
})

companies.forEach((company, index) => {
    // console.log(`${index+1}: ${company.name} category: ${company.category}`);
})

// *****************  Filter  *****************


// Get 21 and older
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 21) {
        canDrink.push(ages[i]);
    }
}

const canDrink1 = ages.filter(function (age) {
    if (age >= 21) {
        return true;
    }
})

const canDrink2 = ages.filter(age => age >= 21);

// console.log(canDrink2);

// Filter retail companies

const retail = companies.filter(function (company) {
    if (company.category === 'Retail') {
        return true;
    }
});

const retail2 = companies.filter(company => company.category === 'Retail');

// console.log(retail2);

const companysFromEighties = companies.filter(
    company => company.start >= 1980 && company.start < 1990);

// console.log(companysFromEighties);

const longLastedCompanies = companies.filter(company => (company.end - company.start >= 10));
// console.log(longLastedCompanies);



// *****************  Map  *****************

// Create array of company names

const companyNames = companies.map(company => company.name);
// console.log(companyNames);

const testMap = companies.map(company =>
    `${company.name}: [${company.start} - ${company.end}]`
);
// console.log(testMap);

const squareRoot = ages.map(age => Math.sqrt(age).toPrecision(3));
const divideByTwo = ages.map(age => age / 2);

// ****  together! *****

const aLotOfModifying = ages
    .map(age => Math.sqrt(age))
    .map(age => age / 2)
    .map(age => (age * 100).toPrecision(3)); // And 1 more!



// console.log(squareRoot);
// console.log(divideByTwo);
// console.log(aLotOfModifying);


// *****************  Sort  *****************

const sortedCompanies = companies.sort(function (c1, c2) {
    if (c1.start > c2.start) {
        return 1;
    } else {
        return -1;
    }
});

console.log(sortedCompanies);

// Easier way
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

console.log(sortedCompanies2);

const sortAges = ages.sort((a, b) => a - b);
// Changing the initial array and gives a link 
// const sortAgesReverse = ages.sort((a, b) => b - a);
console.log(sortAges);
// console.log(sortAgesReverse);
console.log(ages);

// ***********  WTF!?  ************

let a = [4, 1, 5, 2, 3];
let b = a;
console.log(b); // b = [4, 1, 5, 2, 3] 
a.sort();
console.log(b); // b = [1, 2, 3, 4, 5] !! Changed with a
//--
let x = [7, 1, 5, 2, 3];
let y = x;
x = [6, 8];
console.log(y); // y = [7, 1, 5, 2, 3] !! Didn't change with x

// *********************************


// Sorting an Array in Random Order:
// (not accurate)

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) { return 0.5 - Math.random() });


// *****************  Reduce  *****************

let ageSum = 0;
for (let i = 0; i < ages.length; i++) {
    ageSum += ages[i];
}

const ageSum1 = ages.reduce((acc, cur) => acc + cur, 0);

console.log(ageSum);
console.log(ageSum1);

let i = { years: 0 };

const totalYears = companies.reduce((total, curr) => total + curr.end - curr.start, 0);
console.log(`all companies years total: ${totalYears}`);





const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((acc, cur) => acc + cur, 0);
console.log(combined);