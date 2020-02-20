'use strict';
class User {
  constructor(value) {
    this.name = value.name;
    this.age = value.age;
    this.followers = value.followers;
  }

  getInfo() {
    console.log(
      `User ${this.name} is ${this.age} years old and has ${(this,
      this.followers)} followers`,
    );
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});
console.log(mango);
mango.getInfo();

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});
console.log(poly);

poly.getInfo();
