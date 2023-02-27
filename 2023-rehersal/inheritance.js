'use strict';
/////////// ?????????????????????????????????????????

let user = {
    name: "John",
    surname: "Smith",
  
    set fullName(value) {
      [this.name, this.surname] = value.split(" ");
    },
  
    get fullName() {
      return `${this.name} ${this.surname}`;
    }
  };
  
  let admin = {
    __proto__: user,
    isAdmin: true,
    name: 'Mikola'
  };
  
  console.log(' -> ', admin.fullName); // Mikola Smith (*)
  
  // срабатывает сеттер!
//   admin.fullName = "Alice Cooper"; // (**)
  console.log(admin.name); // Alice
  console.log(admin.surname); // Cooper
  console.log(user.name, user.surname); // John Smith
  
