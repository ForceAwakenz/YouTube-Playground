'use strict'

const person = Object.create({
    calculate() {
        console.log('Age: ', new Date().getFullYear() - this.birthYear);
    }
}, {
    name: {
        value: 'Kiril',
        enumerable: true,
        writable: true,
        configurable: true
    },
    birthYear: {
        value: 1988,
        enumerable: true,
        writable: false,
        configurable: false
    },
    age: {
        get() {
            return new Date().getFullYear() - this.birthYear;
        },
        set(value) {
            document.body.style.background = 'red';
            console.log('Set age', value);
        }
    }
});

// const person = {
//     name: 'Kiril',
//     birthYear: 1998
// }

// console.log(person);

// person.name = 'Maxim';


//==== Doesn't work for person Object.create without property descriptors =======

for (let key in person) {
    console.log('key: ', key, ', value: ', person[key]); // empty
}

console.log(Object.keys(person)); // empty

//====================================

// The same but with 

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log('key: ', key, ', value: ', person[key]); // empty
    }
}

