'use strict'

class bankAccount {
    constructor(name, account) {
        this.name = name;
        this.account = account;
    }
    [Symbol.toPrimitive](hint) {
        console.log(hint);
        if (hint == 'string') {
            return this.name;
        } else {
            return this.account;
        }
    }
}

let john = new bankAccount('John', 1000);
let company = new bankAccount('company', 10000);

john += company * 0.1;
// company = company * 0.9; // if I comment this line String(company will work correctly)

console.log('String: ', String(company));



// console.log(john, company);
// const declartation = john + ' is working on ' + company;
// console.log(declartation);
// alert(company);


// ===========================================================

// let user = {
//     name: "John",
//     money: 1000,
  
//     [Symbol.toPrimitive](hint) {
//     //   alert(`hint: ${hint}`);
//       return hint == "string" ? `{name: "${this.name}"}` : this.money;
//     }
// };
  
  // демонстрация результатов преобразований:
//   alert(user); // hint: string -> {name: "John"}
//   alert(+user); // hint: number -> 1000
//   alert(user + 500); // hint: default -> 1500

// ===========================================================

function Answer() {
    this[Symbol.toPrimitive] = function(hint) {
      console.log('convert to ' + hint);
      if (hint == 'string') {
        return 'the answer is 42';
      } else if (hint == 'number') {
        return 42;
      } else {
        return "default";
      }
    }
  }
  var a = new Answer();
  console.log(10 + a);
  console.log(+a);
  console.log(''+a);
  console.log(`${a}`)