
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('op_type', function (table) {//deposit, expense, etc
      table.increments('op_type_id').primary();
      table.string('op_type_name');
      table.timestamps();
    }),
    knex.schema.createTable('op_category', function (table) {//whatever category the user creates
      table.increments('op_category_id').primary();
      table.string('op_category_name');
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user.user_id');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('op_type'),
    knex.schema.dropTableIfExists('op_category')
  ]);
};
