'use strict'

const Animal = function(options) {
    this.name = options.name;
    this.color = options.color;
}

const dog = new Animal({name: 'Rex', color: '#fff'});

console.log(dog);

