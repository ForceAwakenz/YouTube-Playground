// ??????????????????????????????????????????????????

// const baz = {
//     bar() { console.log('hi');}
// }

// baz.bar(); // there


// function foo() {
//     function bar() {
//         console.log('there');
//     }
//     const woo = 5;
// }

// console.log(foo.bar); // undefined, why???
// console.log(foo.woo); // undefined, why???
// because it's not a foo property



// ??????????????????????????????????????????????????
// ==================================================

// const foo = Object.assign(
//     // Function expression, creates a function:
//     function foo() {
//         console.log("foo");
//     },
//     // Object literal, creates an object:
//     {
//         bar() {
//             console.log("bar");
//         }
//     }
// );
// foo.bar(); // "bar"
// foo();     // "foo"
// console.log(foo); // ƒ () { console.log("foo");} // without bar - it's chrome leak
// console.log(foo.bar); // ƒ bar() { console.log("bar");}

// ==================================================

// var a = 555;

// function outer() {

//     const yo = () => console.log('yo', this.a); // yo 10
//     yo(); // took this of outer function

//     console.log( a + 3); // Just does variable lookup

//     function hey() {
//         console.log('hey', this.a); // hey 555 in non-strict mode
//     } // 
//     hey(); // Matters, where hey invokes

//     const innerObj = {
//         a: 42,
//         hey: hey,
//     }

//     innerObj.hey(); // hey 42

//     console.log('this for outer(): ' , this);
//     // -> this for outer():  {a: 10, f1: ƒ}
// }

// const obj = { a: 10 };
// obj.f1 = outer;

// obj.f1();

// =========================

// const arrow = () => console.log(this);
// const func = function() {console.log(this);}

// const obj3 = { a: 17 };

// arrow.apply(obj3); // Window {...}
// func.apply(obj3); // {a: 17}


// theObject = {
//     someKey: 'Some Value',
//     arrowInside() {
//         console.log(this); // theObject
//         const arrw = () => console.log(this); // theObject
//         arrw();
//     },
//     regFuncInside() {
//         console.log(this); // theObject
//         const regFunc = function () { console.log(this); } // Window {...}
//         regFunc();
//     },
//     justArrow: () => console.log(this) // Window {...}
// }

// theObject.arrowInside();

// theObject.regFuncInside();

// theObject.justArrow();


// ==================================================



// const calculator = {
//     read(first, second) {
//         this.first = first;
//         this.second = second;
//     },
//     sum() {
//         return this.first + this.second;
//     },
//     mul() {
//         return this.first * this.second;
//     }
// };

// calculator.read(7, 10);
// console.log( calculator.sum() );
// console.log( calculator.mul() );


// ==================================================

// let ladder = {
//     step: 0,
//     up() {
//         this.step++;
//         return this;
//     },
//     down() {
//         this.step--;
//         return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       console.log( this.step );
//     }
// };
  
// ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1

// ladder.up().up().up().up().down().showStep(); // 4


// ==================================================

/*

Создаём Accumulator
важность: 5
Напишите функцию-конструктор Accumulator(startingValue).

Объект, который она создаёт, должен уметь следующее:

Хранить «текущее значение» в свойстве value. Начальное значение устанавливается в аргументе конструктора startingValue.
Метод read() использует prompt для получения числа и прибавляет его к свойству value.
Таким образом, свойство value является текущей суммой всего, что ввёл пользователь при вызовах метода read(), с учётом начального значения startingValue.

Ниже вы можете посмотреть работу кода:

*/

// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.value += +prompt('Add some value: ', 0);
//     }

// }

// let accumulator = new Accumulator(1); // начальное значение 1

// accumulator.read(); // прибавит ввод prompt к текущему значению
// accumulator.read(); // прибавит ввод prompt к текущему значению

// alert(accumulator.value); // выведет сумму этих значений


// ==================================================






