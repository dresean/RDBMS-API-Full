const faker = require('faker');
const dummyData = require('../../faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers(),
        dummyData.randomUsers()
      ]);
    })
    .catch(error => console.log(error));
};
