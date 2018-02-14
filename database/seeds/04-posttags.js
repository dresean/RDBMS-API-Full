
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('posttags').del()
    .then(function () {
      // Inserts seed entries
      return knex('posttags').insert([
        {postId: 1, tagId: 2},
        {postId: 6, tagId: 5}, 
        {postId: 5, tagId: 7}, 
        {postId: 2, tagId: 10}, 
        {postId: 3, tagId: 10}, 
        {postId: 9, tagId: 9}, 
        {postId: 9, tagId: 8}, 
        {postId: 8, tagId: 6}, 
        {postId: 7, tagId: 3}, 
        {postId: 3, tagId: 1}, 
        {postId: 4, tagId: 4}
      ]);
    })
    .catch(error => console.log(error));
};
