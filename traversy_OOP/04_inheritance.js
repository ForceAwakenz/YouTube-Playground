'use strict'

function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;

    this.func = function () {
        return `this is inner function`;
    }
}

Book.prototype.getSummary = function () {
    return `"${this.title}" was written by ${this.author} in ${this.year}`
}


// Magazine constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);

    this.month = month;
}

// Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);

// Instantiate Magazine Object

const mag1 = new Magazine('Men\'s Health', 'Terry Williams', '2020', 'Feb');

// Use Magazine constructor

Magazine.prototype.constructor = Magazine;


// console.log(mag1.getSummary());
console.log(mag1);
console.log(Book.prototype);
console.log(Magazine.prototype);

console.log(mag1.getSummary);

console.log(mag1.func()); // if func is inside the Book we don't need to Inherit Prototype