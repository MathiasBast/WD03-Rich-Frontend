
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('data').del()
    .then(function () {
      // Inserts seed entries
      return knex('data').insert([
        {id: 1, name: 'Mathias', color: 'Red', animal: 'Pig'},
        {id: 2, name: 'James', color: 'Weird', animal: 'Dog'},
        {id: 3, name: 'Edam', color: 'Pink', animal: 'Monkey'},
        {id: 4, name: 'Bacon', color: 'Pink', animal: 'Cat'},
        {id: 5, name: 'Bagal', color: 'Brown', animal: 'Turtle'},
        {id: 6, name: 'Bottle', color: 'Black', animal: 'Lion'}
      ]);
    });
};
