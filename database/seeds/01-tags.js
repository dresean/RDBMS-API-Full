const faker = require('faker');
const dummyData = require('../../faker');
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('tags').del()
    .then(function () {
      // Inserts seed entries
      return knex('tags').insert([
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags(),
        dummyData.randomTags()
      ]);
    })
    .catch(error => console.log(error));
};
