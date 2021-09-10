'use strict'

class Example {
    constructor(example1) {
        this.example1 = example1;
    }
}

Example.getThis = function () {
    console.log(this);
    // console.log('this');
}

Example.getThis();

console.log(Example.prototype);
console.log({}.prototype);
console.log({}.__proto__);

function ExampleES5(example1) {
    this.example1 = example1;
    console.log(this);
}

ExampleES5.showThis = function () {
    console.log(this);
}


ExampleES5.showThis();
// let a = new ExampleES5('yo');


