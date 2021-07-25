'use strict'

function House(street, number, floors) {
    this.street = street;
    this.number = number;
    this.floors = floors;
}

const home = new House('Peremohy', 55, 5);

// console.log(home);

const someHouse = Object.create(House, {
    name: {
        value: 'some name'
    }
});

// console.log(someHouse);

// =======================================================

function Fruit() {
    this.name = '_';
}

Fruit.prototype.getFruitList = function () {
    console.log(
        `
        1. Apple,
        2. Peach,
        3. Orange
        `
    );
}

const newFruit = new Fruit();

// console.log(newFruit.getFruitList());

// console.log(new Fruit().name);

// =============================================

const person = {
    name: 'Kiril',
    age: 35,
    income: 4000
};

const keys = Object.keys(person);
keys.forEach((key, index) => {
    // console.log('key:', key);
    // console.log('value:', person[key]);
    // console.log(index);
})
