
exports.up = function(knex, promise) {
  return knex.schema.createTable('data', function (table) {
    table.increments('id').primary()
    table.string('name')
    table.string('color')
    table.string('animal')
  })
};

exports.down = function(knex, promise) {
  return knex.schema.dropTable('data')
};
