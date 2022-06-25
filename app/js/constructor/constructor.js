// //функция-конструктор
// function User(name) {
//   this.name = name;
//   // this.isAdmin = false;
// }

// let user1 = new User('Владимир');
// let user2 = new User('Фёдор');
// console.log(user1, user2);

// function Users(name) {
//   this.name = name;

//   this.sayHi = function() {
//     console.log(`Меня зовут ${name}`);
//   }
// }

// let user01 = new Users('Петров');
// let user02 = new Users('Пнёв');

// user01.sayHi();
// user02.sayHi();

//Классы

class User {
  constructor(name, surname, age) {
    this.name = name;
    this.surname = surname;
    this.age = age;
  }

  sayName() {
    console.log(this.name, this.surname, this.age);
  }
}

let classUser = new User('Владимир', 'Петров', 32);

classUser.sayName();