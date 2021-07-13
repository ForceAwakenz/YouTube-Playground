// Objects. Minin https://www.youtube.com/watch?v=Bluxbh9CaQ0&t=11037s
'use strict'

const person = {
    name: 'Kiril',
    age: 33,
    isProgrammer: true,
    languages: ['ru', 'ua', 'en', 'es'],
    'complex key': 'complex value',
    ['key_' + (1+3)]: 'Computed Key',
    // greet: function () // <= before we had to write this way
    greet() {
        console.log('greet from person');
    },
    info() {
        console.info('Information about person with name', this.name)
    }
};

console.log(person.name);
console.log(person['age']);
console.log(person['complex key']);
person.age++;
person.greet();
person.languages.push('ge');

console.log(person);
person['key_4'] = undefined;
delete person['key_4'];
person['languages'].splice(0,1);

const name = person.name;
const age = preson.age;
const languages = person.languages;

const { name, age, languages} = person;
console.log(name, age, languages);

for (let key in person) {
    if (person.hasOwnProperty(key)) { // Protection from mistakes
        console.log('key:', key);
        console.log('value:', person[key]);
    }
}

const keys = Object.keys(person);
keys.forEach((key) => {
    console.log('key:', key);
    console.log('value:', person[key]);
})

console.log(person.toString()); // [object Object]

console.log(keys);

person.info()

const logger = {
    keys() {
        console.log('Object Keys:', Object.keys(this));
    },

    keysAndValues() {
        for (let keys in this) {
            console.log('key:', keys);
            console.log('value:', this[keys]);
        }
    },

    keysAndValues2() {
        Object.keys(this).forEach(key => {
            console.log(`"${key}": ${this[key]}`);
        });
    }
}

logger.keys(person);

const bound = logger.keys.bind(person);

bound();

logger.keys.call(person);

logger.keysAndValues.call(person);
logger.keysAndValues2.call(person);


console.log();

