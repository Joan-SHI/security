
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'steve', hash: 'newnew'},
        {id: 2, username: 'craig', hash: 'newnew'},
        {id: 3, username: 'beatrice', hash: 'newnew'}
      ]);
    });
};
