'use strict';

const b = Symbol('b');

const obj = {
    a: 'a1',
    [b]: 'b1',
    c: 'c1'
}

Object.keys(obj).forEach(val => console.log(val));

const newKeysArrFromBasicMethods = Array.prototype.concat(Object.keys(obj), Object.getOwnPropertySymbols(obj));

const newKeysArrFromReflect = Reflect.ownKeys(obj);

console.log(newKeysArrFromBasicMethods);
console.log(newKeysArrFromReflect);

console.log(Object.getOwnPropertyDescriptor(obj, 'a'));
Object.defineProperty(obj, 'a', { configurable: true, enumerable: false, writable: false });
Object.defineProperty(obj, 'a', { writable: true, configurable: true, value: 'q' });
console.log(Object.getOwnPropertyDescriptor(obj, 'a'));

console.warn('-------------------------------')

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

function sumSalaries(obj) {
    // let result = 0;
    // for(let value of Object.values(obj)) {
    //   result += value;
    // }
    // return result;
  
    return Object.values(obj)?.reduce((acc, curr) => acc + curr, 0) || 0;
  
  }

console.log(sumSalaries(salaries));



