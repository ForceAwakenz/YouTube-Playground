'use strict'

// ========================================== 1 +

// function opposite(number) {
//     return -number;
// }
  
// console.log(opposite(5));

// ========================================== 2 +


// function basicOp(operation, value1, value2)
// {
//     return eval(`${value1} ${operation} ${value2}`);
// }

// console.log(basicOp('-', 5, 8));

// ========================================== 3 +

// function printArray(array){
//     return array.toString();
// }
  
// console.log(printArray([1, 2, 3]));

// ========================================== 4 +

// function rentalCarCost(d) {
    
//     let total = d * 40;

//     if (d >= 3) {
//         total -= d >= 7 ? 50 : 20;
//     }

//     return total;
    
// }

// console.log(rentalCarCost(2));
// console.log(rentalCarCost(4));
// console.log(rentalCarCost(10));

// ========================================== 5 +


// function getMiddle(s) {

//     let center = s.length / 2;

//     return s.length % 2
//         ? s.slice(center, center + 1)
//         : s.slice(center - 1 , center + 1 );
    
// }

// console.log(getMiddle('testing'));
// console.log(getMiddle('testo'));
// console.log(getMiddle('1234567890'));


// ==========================================
// ========================================== 6 
// ==========================================

// http://www.codewars.com/kata/partition-on

// var items = [1, 2, 3, 4, 5, 6];
// var items = [1, 2, 70, 3, 4, 5, 45, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);


// function partitionOn(pred, items) {

//     items.sort(function (a, b) {
//         return pred(a) - pred(b)
//     })

//     return items.findIndex(pred);


// }


// console.log(items, i);


// ========================================== 7 +


// let arr = '1, 2, 3, 4';

// function array(arr){

//     let newArr = arr.split(',');

//     if (newArr.length > 2) {
//         newArr.shift();
//         newArr.pop();
//     } else {
//         return null;
//     }

//     return newArr.join(' ');
    
// }

// console.log(array(arr));

// ========================================== 8 + 

// function prefill(n, v) {

//     if (n === 0) {
//         return [];
//     } else if (n < 0 || isNaN(n) || n === Infinity || n === -Infinity || typeof(n) === 'boolean' || n % 1) {
//         throw new TypeError(`${n} is invalid`);
//     }

//     return new Array(+n).fill(v);
// }

// let a = prefill('5a', 'haha');

// console.log(a);

// ========================================== 9 + 

// const vector1 = [3, 2, 1];
// const vector2 = [1, 2, 3];


// function crossProduct(vector1, vector2) {

//     if (!(Array.isArray(vector1) && Array.isArray(vector2) && vector1.length + vector2.length === 6)) {
//         throw 'Arguments are not 3D vectors!';
//         return null;
//     }

//     return [vector1[1] * vector2[2] - vector2[1] * vector1[2],
//     vector1[2] * vector2[0] - vector2[2] * vector1[0],
//     vector1[0] * vector2[1] - vector2[0] * vector1[1]
//     ];

// }

// console.log(crossProduct(vector1, vector2));

// ========================================== 10 +


// function sequence(n, pattern) {

//     return new Array(n)
//         .fill(undefined)
//         .map((x, idx) => {
//         return typeof pattern === 'function'
//             ? pattern(x, idx)
//             : pattern;
//     });
    
// }


// console.log(sequence(5, (x, idx) => idx % 2)); // [0, 1, 0, 1, 0];
// console.log(sequence(5, [])); // ;

// ==========================================
// ========================================== 11
// ==========================================

// https://www.codewars.com/kata/526a569ca578d7e6e300034e/train/javascript

// var Alphabet = {
//     BINARY:        '01',
//     OCTAL:         '01234567',
//     DECIMAL:       '0123456789',
//     HEXA_DECIMAL:  '0123456789abcdef',
//     ALPHA_LOWER:   'abcdefghijklmnopqrstuvwxyz',
//     ALPHA_UPPER:   'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     ALPHA:         'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ',
//     ALPHA_NUMERIC: '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
// };
  

// function convert(input, source, target) {

//     let level = 1;
//     let result = '';

//     function howMuchNumbers(goal, system) {

//         if (goal / system >= 1) {
//             goal -= Math.ceil(goal / system);
//             console.log(goal);
//             level++;
//             howMuchNumbers(goal, system)
//         } else {
//             return 1;
//         }

//     }

//     howMuchNumbers(target, input.length);

//     function compound(level, input, target) {

//         if (input.length ** level)

//     }


// }

// convert('01', null, 15);



// ========================================== 12 +


// function createFunctions(n) {
//     var callbacks = [];
  
//     for (let i = 0; i < n; i++) {
        
//       callbacks.push(function() {
//         return i;
//       });
        
//     }
    
//     return callbacks;
// }
  
// var callbacks = createFunctions(5); // create an array, containing 5 functions


// console.log(callbacks[0]()); // must return 0
// console.log(callbacks[3]()); // must return 3

// ==========================================
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! 13
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

//https://www.codewars.com/kata/53844152aa6fc137d8000589/train/javascript

// function always (n) {
//     return function () {
//         return n;
//     };
// }

// var three = always(3);
// console.log(three()); // returns 3

// ========================================== 14 +


// function createSecretHolder(secret) {

//     return {
//         _secret: secret,
//         getSecret() {
//             return this._secret;
//         },
//         setSecret(newSecret) {
//             this._secret = newSecret;
//         }
//     }

// }


// let obj = createSecretHolder(5);
// obj.getSecret(); // returns 5
// obj.setSecret(2);
// obj.getSecret(); // returns 2

// ==========================================
// ========================================== 15
// ==========================================


// https://www.codewars.com/kata/53583765d5493bfdf5001b35/train/javascript

// var Cat = (function () {
    
//     var count;
//     var overallWeight;
    


//     return function (name, weight) {
//         this.name = name;
//         this.weight = weight;
//         count++;
//         overallWeight += this.weight;
//     }

// }());

// Cat.averageWeigth = function () {
//     return overallWeight / count;
// }


// let garfield = new Cat('garfield', 25);
// Cat.averageWeight(); // 25

// let felix = new Cat('felix', 15);
// Cat.averageWeight();   // now 20



// const Person = (function (firstName, birthYear) {
//     return function (firstName, birthYear) {
//         this.firstName = firstName;
//         this.birthYear = birthYear;
//     }
// })()

// const jonas = new Person('Jonas', 1991);

// console.log(jonas);

// ==========================================
// ========================================== 16
// ==========================================

// https://www.codewars.com/kata/539a0e4d85e3425cb0000a88/train/javascript

// function add(n){
//     return n;
// }

// function curry(func) {

//     return function curried(...args) {
//       if (args.length >= func.length) {
//         return func.apply(this, args);
//       } else {
//         return function(...args2) {
//           return curried.apply(this, args.concat(args2));
//         }
//       }
//     };
  
// }



// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15

// console.log(add(1)(2)(3));

// ==========================================
// ========================================== 17
// ==========================================


// var complexFunction = function (arg1, arg2) {
//     return arg1 + arg2;
//  };
// var cachedFunction = cache(complexFunction);

// cachedFunction('foo', 'bar'); // complex function should be executed
// cachedFunction('foo', 'bar'); // complex function should not be invoked again, instead the cached result should be returned
// cachedFunction('foo', 'baz'); // should be executed, because the method wasn't invoked before with these arguments

// function cache(func) {


// }



// var fibonacci = function (n) {
//     return n< 2 ? n: fibonacci(n-1) + fibonacci(n-2)
// }

// console.log(fibonacci(10));



// var fibonacci = (function () {
//     var memo = [0, 1];
//     var fib = function (n) {
//         var result = memo[n];
//         if (typeof result !== 'number') {
//             result = fib(n - 1) + fib(n - 2);
//             memo[n] = result;
//         }
//         return result;
//     }
//     return fib;
// })();


// ========================================== 18 +


// function one(func) {
//     if (!func) {
//         return 1;
//     }
//     return 1 + func;
// }

// function five(func) {
//     if (!func) {
//         return 5;
//     }
//     return 5 + func;
// }

// function plus(num) {
//     return num;
// }

// let b = one(plus(five()));
// console.log(b);




// function getValue(num, func) {
//     if (!func) return num;
//     else return func(num);
// }

// function two(func) {
//     return getValue(2, func);
// }

// function six(func) {
//     return getValue(6, func);
// }

// function times(num1) {
//     return function(num2) {return num1 * num2}
// }

// let z = six(times(two()));
// console.log(z);






// function compose(f, g) {
    
//     return function (...a) {
//         return f(g(...a));
//     }

// }

// function sqrt(number) {
//     return number * number;
// }

// function divide(number) {
//     return number / 2;
// }

// let a = compose(sqrt, divide);

// console.log(a(6));

// ========================================== 
// ========================================== 19
// ========================================== 


// function compose() {
    
//     let args = Array.from(arguments);
//     let length = args.length;

//     function returner(func) {
//         length--;
//         if (length > 1) {
//             func();
//             return returner(args[length - 1]);
//         }
//         return args[0];
//     }

//     return returner(args[length -1]);

// }

// ========================================== 20 +



// function createMessage(firstString) {
//     let main = firstString;

//     function addString(string) {
//         if (string) {
//             main += ' ' + string;
//             return addString;
//         } else {
//             return main;
//         }
//     }

//     return addString;

// }

// // // better option:
// // function createMessage(str) {
// //     return function(next){
// //       if (next === undefined) {return str;}
// //       return createMessage(str + " "+ next);
// //     }
// // }

// // let createMessage = (msg) => m => m ? createMessage(msg + ' ' + m) : msg;



// let ee = createMessage('hi')('there')();
// console.log(ee);


// ==========================================
// ========================================== 21
// ==========================================

// function spyOn (func) {
 
//     let counter = 0;
//     // let argumentz = [];

//     let callCount = function () {
//         console.log(counter);
//     }

//     if (func) {
//         counter++;
//         return func;
//     }


// }


// function add(a, b) {
//     return a + b;
// }

// let spiedAdd = spyOn(add);


// console.log(spiedAdd(1, 2));
// spiedAdd.callCount();

// ========================================== 22 +

// function execute(num, func) {
//     if (!func) return num;
//     return func(num);
// }

// function zero(func) {
//     return execute(0, func);
// }

// function one(func) {
//     return execute(1, func);
// }

// function two(func) {
//     return execute(2, func);
// }

// function three(func) {
//     return execute(3, func);
// }

// function four(func) {
//     return execute(4, func);
// }

// function five(func) {
//     return execute(5, func);
// }

// function six(func) {
//     return execute(6, func);
// }

// function seven(func) {
//     return execute(7, func);
// }

// function eight(func) {
//     return execute(8, func);
// }
// function nine(func) {
//     return execute(9, func);
// }

// function plus(num1) {
//     return function (num2) {
//         return num1 + num2;
//     }
// }
// function minus(num1) {
//     return function (num2) {
//         return num2 - num1;
//     }
// }
// function dividedBy(num1) {
//     return function (num2) {
//         return Math.floor(num2 / num1);
//     }
// }
// function times(num1) {
//     return function (num2) {
//         return num1 * num2;
//     }
// }



// let a = two(plus(three()));

// console.log(a);

// ========================================== 23 +

// var santa = {
//     sayHoHoHo: function() { console.log('Ho Ho Ho!') },
//     distributeGifts: function() { console.log('Gifts for all!'); },
//     goDownTheChimney: function() { console.log('*whoosh*'); }
// };
  
// var notSanta = {
//     sayHoHoHo: function() { console.log('Oink Oink!') }
// };


// function isSantaClausable(obj) {
    
//     if (typeof obj.sayHoHoHo === 'function'
//         && typeof obj.distributeGifts === 'function'
//         && typeof obj.goDownTheChimney=== 'function') {
//         return true;
//     }

//     return false;

// }

// ==========================================
// ========================================== 24
// ==========================================


// function construct(Class, argumentz) {

//     let newObj = Object.create(Class);



// }

// ========================================== 25 +

// var obj = {
//     person: {
//       name: 'joe',
//       history: {
//         hometown: 'bratislava',
//         bio: {
//           funFact: 'I like fishing.'
//         }
//       }
//     }
// };


// Object.prototype.hash = function (string) {
    
//     let newArr = string.split('.');
//     let current = this;

//     for (let i = 0; i < newArr.length; i++) {
//         if (current[newArr[i]]) {
//             current = current[newArr[i]];
//         } else {
//             return undefined;
//         }
//     }

//     return current;

// }

// console.log(obj.hash('person.name'));
// console.log(obj.hash('person.history.bio'));


// ========================================== 26 +


// Array.prototype.square = function () {
//     return this.map(num => num ** 2);
// }

// Array.prototype.cube = function () {
//     return this.map(num => num ** 3);
// }

// Array.prototype.average = function () {
//     return this.reduce((acc, curr) => acc + curr, 0) / this.length;
// }

// Array.prototype.sum = function () {
//     return this.reduce((acc, curr) => acc + curr, 0);
// }

// Array.prototype.even = function () {
//     return this.filter(num => !(num % 2));
// }

// Array.prototype.odd = function () {
//     return this.filter(num => num % 2);
// }


// let a0 = [1, 3, 5].square();
// let a1 = [1, 3, 5].cube();
// let a2 = [1, 3, 5].average();
// let a3 = [1, 3, 5].sum();
// let a4 = [1, 2, 5, 4].even();
// let a5 = [1, 2, 5, 4].odd();

// console.log(a0);
// console.log(a1);
// console.log(a2);
// console.log(a3);
// console.log(a4);
// console.log(a5);

// // wow!!
// // Object.assign(Array.prototype, {
// //     square() {return this.map(n => n * n);},
// //     cube() {return this.map(n => Math.pow(n, 3));},
// //     sum() {return this.reduce((p,n) => p + n, 0);},
// //     average() {return this.reduce((p,n) => p + n, 0) / this.length;},
// //     even() {return this.filter(n => !(n % 2));},
// //     odd() {return this.filter(n => n % 2);}
// // });

// ==========================================
// ========================================== 27
// ==========================================



// ========================================== 28 +


// function digital_root(n) {

//     let res = n;

//     function calcRoot() {
//         res = String(res).split('').reduce((sum, char) => sum + +char, 0);
//         if (res >= 10) {
//             calcRoot();
//         }
//     }

//     calcRoot();

//     return res;

// }

// console.log(digital_root(942));


// ========================================== 29 +

// class Animal {
//     constructor(name, age, legs, species, status) {
//       this.name = name;
//       this.age = age;
//       this.legs = legs;
//       this.species = species;
//       this.status = status;
//     }
//     introduce() {
//       return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
//     }
// }


// class Shark extends Animal {
//     constructor(name, age, status) {
//         super(name, age, 0, 'shark', status);
//     }

// }
  
// class Cat extends Animal {
//     constructor(name, age, status) {
//         super(name, age, 4, 'cat', status);
//     }
//     introduce() {
//         return super.introduce() + `  Meow meow!`;
//     }

// }
  
// class Dog extends Animal {
//     constructor(name, age, status, master) {
//         super(name, age, 4, 'dog', status);
//         this.master = master;
//     }
//     greetMaster() {
//         return `Hello ${this.master}`;
//     }

// }

// let sharky = new Shark('lola', 22, 'very good');
// console.log(sharky);

// let kitty = new Cat('kitty', 33, 'hello kitty');

// console.log(kitty.introduce());


// ========================================== 30 +


// class Cuboid {
//     constructor(length, width, height) {
//         this.length = length;
//         this.width = width;
//         this.height = height;
//     }

//     get surfaceArea() {
//         return 2 * this.length * this.height
//             + 2 * this.height * this.width
//             + 2 * this.width * this.length;
//     }

//     get volume() {
//         return this.length * this.height * this.width;
//     }

// }

// class Cube extends Cuboid {
//     constructor(length) {
//         super(length, length, length);
//     }
// }

// // let a = new Cuboid(2, 3, 4);

// // console.log(a.surfaceArea);
// // console.log(a.volume);






