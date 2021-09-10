'use strict'

// =============================================================================
// https://www.codewars.com/kata/554b4ac871d6813a03000035/train/javascript

// let a = '1 2 3 4 5 33';

// function highAndLow(numbers){
//     let arr = numbers.split(' ');
//     let min = arr[0],
//     max = arr[0];
    
//     for (let num of arr) {
//         min = +min < +num ? min : num;
//         max = +max > +num ? max : num;
//     }

//     return `${max} ${min}`;

// }


// function highAndLow2(numbers){
//     let sortArr = numbers.split(' ').sort((a, b) => + a - +b);

//     return `${sortArr.reverse()[0]} ${sortArr.reverse()[0]}`;
    
// }

// let highAndLow3 = (numbers) => `${numbers.split(' ').sort((a, b) => + a - +b).reverse()[0]} ${numbers.split(' ').sort((a, b) => + a - +b)[0]}`;


// console.log(highAndLow(a));
// console.log(highAndLow2(a));
// console.log(highAndLow3(a));


// =============================================================================
// https://www.codewars.com/kata/5e2596a9ad937f002e510435/train/javascript

let a = '0100000';

function infected(s) {

    if (!s.includes('0') || !s.includes('1')) return 0;

    const pplCount = s.split('').filter( e => e !== 'X').length;
    // could do s.split('X').join('').length

    let infectedPpl = s
        .split('X')
        .reduce( (acc, land) => acc += land.includes('1') && land.length
        // could do .filter(land => land.includes('1')).join('').length
    , 0);

    return 100 * infectedPpl / pplCount;

}


// let infected2 = (s) => 
//     s.split('X')
//     .reduce((acc, land) => acc + (land.includes('1') ? land.length : 0), 0) 
//     * 100 
//     / s.split('').filter( e => e !== 'X').length


// function infected(s) {
//     return (
//     s.split`X`.reduce((a,s)=>a+s.length*s.includes`1`,0) / s.split`X`.join``.length
//     ) * 100 || 0
//   }

// const infected3 = s =>
//   s.split(`X`).filter(Number).join(``).length / s.replace(/\D/g, ``).length * 100 || 0;

// console.log(infected(a));
console.log(infected(a));

