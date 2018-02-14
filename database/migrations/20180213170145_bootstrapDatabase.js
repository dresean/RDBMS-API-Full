
exports.up = function(knex) {
  return createUsersTable(knex)
  .then(createPostsTable)
  .then(createTagsTable)
  .then(createPostTagsTable)
  .catch((error) => {
    if(error){
      console.log(error);
    }
  });
};

exports.down = function(knex) { // goes backwards based on the order of dependence 
  return knex.schema
  .dropTableIfExists('posttags')
  .then(() => {
    console.log('posttags table deleted');
  })
  .then( () => {
    console.log('tags table deleted');
    return knex.schema.dropTableIfExists('tags')
  })
  .then( () => {
    console.log('posts table deleted');
    return knex.schema.dropTableIfExists('posts')
  })
  .then( () => {
    console.log('users table deleted');
    return knex.schema.dropTableIfExists('users')
  })
  .catch( (error) => {
    console.log(error);
  });
};

function createUsersTable(knex){
  console.log('creating users table');
  return new Promise((resolve, reject) => {
    knex.schema.createTable('users', (tbl) => {
      tbl
      .increments();
      tbl
      .string('name', 128)
      .notNullable();
      tbl
      .timestamp('createdOn').defaultTo(knex.fn.now());
      console.log('created users table');
      resolve(knex);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  })
}
function createPostsTable(knex){
  console.log('creating post table');
  return new Promise( (resolve, reject) => {
    knex.schema.createTable('posts', (tbl) => {
      tbl
      .increments();
      tbl
      .integer('userId')
      .references('id')
      .inTable('users');
      tbl
      .text('post', 128)
      .notNullable();
      tbl
      .timestamp('createdOn').defaultTo(knex.fn.now());
      console.log('created posts table');
      resolve(knex);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  })
}

function createTagsTable(knex){
  console.log('creating tags table');
  return new Promise((resolve, reject) => {
    knex.schema.createTable('tags', (tbl) => {
      tbl
      .increments();
      tbl
      .string('tag', 80)
      .unique('tag');
      tbl
      .timestamp('createdOn').defaultTo(knex.fn.now());
      console.log('created tags table');
      resolve(knex);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  })
};

function createPostTagsTable(knex){
  console.log('creating posttags table');
  return new Promise((resolve, reject) => {
    knex.schema.createTable('posttags', (tbl) => {
      tbl
      .increments();
      tbl
      .integer('postId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('post');
      tbl
      .integer('tagId')
      .unsigned()
      .notNullable()
      .references('id')
      .inTable('tags');
      tbl
      .timestamp('createdOn').defaultTo(knex.fn.now());
      console.log('created posttags table');
      resolve(knex);
    })
    .catch((error) => {
      console.log(error);
      reject(error);
    });
  })
}