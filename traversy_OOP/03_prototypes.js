'use strict'

// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

// Get Summary 

Book.prototype.getSummary = function () {
    return `"${this.title}" was written by ${this.author} in ${this.year}`
}

// Get Age

Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `this book was written ${years} years ago`;
}

// Revise / Change Year

Book.prototype.revise = function (newYear) {
    this.year = newYear;
    this.revised = true;
}

// Instatiate an Object
const book1 = new Book('Alchemist', 'Paolo Coelho', '1995');
const book2 = new Book('Skin in the game', 'Nassim Taleb', '2015');

// console.log(book1);
// console.log(book1.getSummary());
// console.log(book2.getSummary());
// console.log(book2.getAge());

console.log(book2);
book2.revise('2019');
console.log(book2);
