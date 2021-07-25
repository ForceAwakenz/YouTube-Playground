
// Object Of Protos

const bookProtos = {
    getSummary: function () {
        return `"${this.title}" was written by ${this.author} in ${this.year}`
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `this book was written ${years} years ago`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// // console.log(book1);
// book1.title = 'Big Book of Stories';
// book1.author = 'Arthur Author';
// book1.year = '2013';

// Another Way

const book1 = Object.create(bookProtos, {
    title: {
        value: 'Big Book of Stories',
        enumerable: true
    },
    author: {
        value: 'Arthur Author',
        enumerable: true
    },
    year: {
        value: '2013',
        enumerable: true
    }
});

console.log(book1.getSummary());
console.log(book1.getAge());

console.log(book1);

for (let elem in book1) {
    console.log(book1[elem]);
}