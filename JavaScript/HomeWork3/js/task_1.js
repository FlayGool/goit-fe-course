'use strict';

const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;

for (let key of Object.keys(user)) {
  console.table(`${key}: ${user[key]}`);
}
