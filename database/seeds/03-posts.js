const faker = require('faker');
const dummyData = require('../../faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posts').del()
    .then(function () {
      // Inserts seed entries
      return knex('posts').insert([
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts(),
        dummyData.randomPosts()
      ]);
    })
    .catch(error => console.log(error));
};
