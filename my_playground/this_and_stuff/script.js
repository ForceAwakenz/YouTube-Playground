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
//       this.step++;
//     },
//     down() {
//       this.step--;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//     }
//   };

// ==================================================

// for (var i = 0; i <= 5; i++) {

//   setTimeout(() => {
//     console.log('i: ', i); // 5 times 6
//   } , i * 1000);

// }


// for (var i = 0; i <= 5; i++) {

// (  setTimeout(() => {
//     console.log('i: ', i); // 5 times
//   } , i * 1000))();

// }


// hmm.. doesn't work if previous cycles uncommented!

// for (var i = 0; i <= 5; i++) {

//  (function (i) {

//     setTimeout(() => {
//       console.log('i: ', i);
//     } , i * 1000);

//   })(i);
  
//   }


// =====================================

// var foo = (function() {
//   var o = {bar: 'bar'};
//   return {obj: o};
// })();

// console.log(foo.obj.bar);


// foo.obj.bar = 'zoo';

// console.log(foo.obj.bar);


// =====================================


// let a = true && 10 > 5 ? 'continue' : 5;

// console.log(a);
// let b = 7;
// console.log(b);

