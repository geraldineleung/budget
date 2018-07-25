
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('account', function (table) {
      table.increments('account_id').primary();
      table.integer('user_id').unsigned();
      table.foreign('user_id').references('user.user_id');
      table.string('account_name');
      table.decimal('amount');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('account')
  ]);
};
