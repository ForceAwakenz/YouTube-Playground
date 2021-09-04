'use strict'

class Worker {
    constructor(name, secondName, rate, days) {
        this.name = name;
        this.secondName = secondName;
        this.rate = rate;
        this.days = days;
    }

    getRate() {
        return this.rate;
    }

    getDays() {
        return this.days;
    }

    getSalary() {
        return this.days * this.rate;
    }

    setRate(newRate) {
        this.rate = newRate;
    }

    setDays(newDays) {
        this.days = newDays;
    }
}

class PreciousWorker extends Worker {
    constructor(name, secondName, rate, days, coeff) {
        super(name, secondName, rate, days);
        this.coeff = coeff;
    }

    getSalary() {
        return this.days * this.rate * this.coeff;
    }

}

// класс Worker будет работать так:

let worker = new Worker('Имя', 'Фамилия', 10, 31);

console.log(worker.getRate()); //выведет 10
console.log(worker.getDays()); //выведет 31
console.log(worker.getSalary()); //выведет 310 - то есть 10*31

worker.setRate(20); //увеличим ставку
worker.setDays(10); //уменьшим дни
console.log(worker.getSalary()); //выведет 200 - то есть 20*10


console.log('=========================================');
// класс PreciousWorker наследует у Worker будет работать так:

let preciousWorker = new PreciousWorker('Имя', 'Фамилия', 10, 31, 5);

console.log(preciousWorker.getRate()); //выведет 10
console.log(preciousWorker.getDays()); //выведет 31
console.log(preciousWorker.getSalary()); //выведет 1550 - то есть 10*31*5

preciousWorker.setRate(20); //увеличим ставку
preciousWorker.setDays(10); //уменьшим дни
console.log(preciousWorker.getSalary()); //выведет 1000 - то есть 20*10*5