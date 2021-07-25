'use strict'

const str1 = 'Hello';
// console.log(str.toUpperCase());

const str2 = new String('Hello');

console.log(typeof str1, typeof str2); // string object

console.log(window);
// the same:
// window.alert();
// alert();

// console.log(navigator.appVersion);

 
const book1 = {
    title: 'Book One',
    author: 'John Doe',
    year: '2013',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    
};

// console.log(book1);
// console.log(book1.title);
// console.log(book1.getSummary());


const book2 = {
    title: 'Book Two',
    author: 'Jane Doe',
    year: '2017',
    getSummary: function () {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    
};

console.log(book2.getSummary());
console.log(Object.values(book2));
console.log(Object.keys(book2));