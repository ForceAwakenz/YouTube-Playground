'use strict'

// Constructor

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function () {
        return `"${this.title}" was written by ${this.author} in ${this.year}`
    };
}

// Instatiate an Object
const book1 = new Book('Alchemist', 'Paolo Coelho', '1995');
const book2 = new Book('Skin in the game', 'Nassim Taleb', '2015');

// console.log(book1);
console.log(book1.getSummary());
console.log(book2.getSummary());

// console.log(Book);


