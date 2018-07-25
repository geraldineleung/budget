
exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable('operation', function (table) {
      table.increments('operation_id').primary();
      table.integer('account_id').unsigned();
      table.foreign('account_id').references('account.account_id');
      table.integer('op_type_id').unsigned();
      table.foreign('op_type_id').references('op_type.op_type_id');
      table.integer('op_category_id').unsigned();
      table.foreign('op_category_id').references('op_category.op_category_id');
      table.decimal('amount');
      table.text('comment');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
    knex.schema.dropTableIfExists('operation')
  ]);
};
