'use strict'

function makeUser(firstName, age) {
    return {
        firstName,
        age,
    };
}

const joe = makeUser('Joe', 35);

// console.log(joe);

// console.log("firstName" in joe);

const user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
// console.log(user.name);
delete user.name;

let schedule = {};

function isEmpty(obj) {

    if (Object.keys(obj).length <= 0) {
        return true;
    }
    return false;

}

// cool variant from learn.js
function isEmpty2(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}


isEmpty(schedule);
isEmpty2(schedule);


console.log('Is array is empty ' + isEmpty(schedule), isEmpty2(schedule));

schedule['8:30'] = 'get up';

isEmpty(schedule);

// alert(isEmpty(schedule));


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;

for (let keys in salaries) {
    sum += salaries[keys];
}

// alert(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

  
  function multiplyNumericObj(obj) {
      for (let key in obj) {

          if (typeof (obj[key]) == 'number') {
              obj[key] *= 2;
          }
          
        }
    }
    
// console.log(menu);

// multiplyNumericObj(menu);
    
// console.log(menu);


// const user = {
//     name: 'Victor',
//     age: 22,
// }

// Object.assign(user, { salary: 10000, age: 33 });

// console.log(user);


// let clone = Object.assign({}, user);

// console.log(clone);


// function sayHi() {
//     alert( this.name );
// }

// let alfred = { name: 'Alfred'};
// let jack = { name: 'Jack'};

// alfred.f = sayHi; // Присваиваем код функции в параметры объектов
// jack.f = sayHi;

// // Вызываем функции
// alfred.f(); // Alfred
// jack.f(); // Jack
// jack['f'](); // Jack // Второй способ вызова функции



