'use strict';

const protoObject = {
    protoValue: 'I\'m parent',
    get message() {
        return `${this.protoValue} and ${this.successorValue}`;
    }
};

const successorObject = {
    __proto__: protoObject,
    successorValue: 'I know it'
};

// console.log(successorObject.message);

// =================================================  //
console.warn('// =================================================  //');
// ?????????????????????????????????????????????????????????????????????????????????????
// ?????????????????????????????????????????????????????????????????????????????????????

function Person(name) {
    this.nick = 'nick';
}

function Punk(guitar) {
    this.guitar = guitar;
}

Punk.prototype.constructor = Person;


const punk1 = new Punk('Yamaha');
const anonymus = new punk1.constructor('nick?');

console.log(punk1);
console.log(anonymus);

// =================================================  //
console.warn('// =================================================  //');

function Mechanism(name) {
    this.name = name;
    // prototype = function() {
    //     log: () => console.log(this),
    // }
}
Mechanism.prototype = {
    log: function () { return console.log(this) },
}

const car1 = new Mechanism('car');

car1.log();

console.dir(Mechanism);

class Example {
    static field = 'Static field';
}

const ex = new Example();

console.log(ex.__proto__.constructor.field);

