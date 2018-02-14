const faker = require('faker');

const randomPosts = () => {
    const posted = faker.lorem.paragraph();
    const idNumber = faker.random.number();
    const newPost = {
      userId: idNumber,
      post: posted
      };
      return newPost;
    }

    
const randomUsers = () => {
      const named = faker.name.findName();
      const newName = {name: named}
      return newName;
    }
  
    
const randomTags = () => {
      const tagged = faker.lorem.words();
      const newTag = {
        tag: tagged
      };
      return newTag;
    }

  module.exports = {
  randomPosts,
  randomTags,
  randomUsers
  };