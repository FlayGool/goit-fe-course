'use strict';

import users from './users.js';

// ----------------------------------------------1--------------------------------------------------
const getUserNames = users => {
  return users.map(users => users.name);
};

console.log(getUserNames(users));

// ----------------------------------------------2--------------------------------------------------
const getUsersWithEyeColor = (users, color) => {
  return users.filter(users => users.eyeColor === color);
};

console.log(getUsersWithEyeColor(users, 'blue'));

// ----------------------------------------------3--------------------------------------------------
const getUsersWithGender = (users, gender) => {
  return users.filter(users => users.gender === gender);
};

console.log(getUsersWithGender(users, 'male'));

// ----------------------------------------------4--------------------------------------------------
const getInactiveUsers = users => {
  return users.filter(users => users.isActive === false);
};

console.log(getInactiveUsers(users));

// ----------------------------------------------5--------------------------------------------------
const getUserWithEmail = (users, email) => {
  return users.find(user => user.email === email);
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com'));
console.log(getUserWithEmail(users, 'elmahead@omatom.com'));
// ----------------------------------------------6--------------------------------------------------
const getUsersWithAge = (users, min, max) => {
  return users.filter(users => users.age >= min && users.age <= max);
};

console.log(getUsersWithAge(users, 20, 30));
console.log(getUsersWithAge(users, 30, 40));

// ----------------------------------------------7--------------------------------------------------
const calculateTotalBalance = users => {
  return users.reduce((total, user) => total + user.balance, 0);
};

console.log(calculateTotalBalance(users));

// ----------------------------------------------8--------------------------------------------------
const getUsersWithFriend = (users, friendName) => {
  return users
    .filter(user => user.friends.some(friend => friend === friendName))
    .map(user => user.name);
};

console.log(getUsersWithFriend(users, 'Briana Decker'));
console.log(getUsersWithFriend(users, 'Goldie Gentry'));

// ----------------------------------------------9--------------------------------------------------
const getNamesSortedByFriendsCount = users => {
  return [...users]
    .sort((a, b) => a.friends.length - b.friends.length)
    .map(user => user.name);
};

console.log(getNamesSortedByFriendsCount(users));

// ----------------------------------------------10--------------------------------------------------
const getSortedUniqueSkills = users => {
  return users
    .reduce((skillsList, user) => {
      skillsList.push(...user.skills);
      return skillsList;
    }, [])
    .filter((user, index, array) => array.indexOf(user) === index)
    .sort();
};

console.log(getSortedUniqueSkills(users));
