// ==========================================
// ========================================== 6 --
// ==========================================

// http://www.codewars.com/kata/partition-on

// var items = [1, 2, 3, 4, 5, 6];
// var items = [1, 2, 70, 3, 4, 5, 45, 6];
// function isEven(n) {return n % 2 == 0}
// var i = partitionOn(isEven, items);


// function partitionOn(pred, items) {

//     items.sort((a, b) => a - b);
//     items.sort(function (a, b) {
//         return pred(a) - pred(b)
//     });
      
//     return items.findIndex(pred);

// }


// console.log(items, i);



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
// console.log(sequence(5, [])); // [0, 1, 0, 1, 0];


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

//     input = +input;
//     let level = 1;

//     function howMuchNumbers(source, input) {

//         if ((source / input ** level) >= 1) {
//             level++;
//             console.log('goal', source, 'system', input ** level);
//             howMuchNumbers(source, input);
//         } else { return; }

//     }

//     howMuchNumbers(input, source.length);

//     console.log(level);

//     function compound(source) {

        

//     }


// }

// convert('15', Alphabet.DECIMAL, Alphabet.BINARY);



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


// function curry(func) {
    
//     return function curried(...args) {
//         if (args.length >= func.length) {
//             return func(...args);
//         } else {
//             return (...args2) => {
//                 return curried.apply(this, args.concat(args2));
//             }
//         }
//     };
    
// }

// function sum() {
//     let sum = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//     return sum;
// }

// let add = curry(sum);

// console.log(add);


// add(1); // 6
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

// let z = `multThree(multTwo(addOne()))`;

// let o = z.replace('add', 'dad');
// console.log(o);


function compose(...functions) {
    
    let funcstring = '';

    functions.reverse();
    functions.forEach(function (f, index) {
        funcstring = `${f.name}(${funcstring})`;
        console.log(funcstring);
    })

    return function (a) {
        funcstring = funcstring.replace('()', `(${a})`);
        console.log(funcstring);
        return eval(funcstring);
    }

}

const addOne = (a) => a + 1;
const multTwo = (b) => b * 2;
const multThree = (c) => c * 3;


console.log(compose(addOne, multTwo, multThree)(3));




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


// ==========================================
// ========================================== 24
// ==========================================


// function construct(Class, argumentz) {

//     let newObj = Object.create(Class);



// }

// ==========================================
// ========================================== 27
// ==========================================

