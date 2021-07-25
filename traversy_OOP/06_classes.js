class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        return `"${this.title}" was written by ${this.author} in ${this.year}`
    }

    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `this book was written ${years} years ago`;
    }

    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }

    static topBookStore() {
        return 'Barnes & Noble';
    }

}

// Instantinate Object

const book1 = new Book('Norman Doidge', 'Neuroplasticity', '2007');

// console.log(book1);
// console.log(book1.getSummary());
// book1.revise('2018');
// console.log(book1);

console.log(Book.topBookStore());
