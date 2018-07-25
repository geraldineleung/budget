
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('op_type').del()
    .then(function () {
      // Inserts seed entries
      return knex('op_type').insert([
        {op_type_id: 1, op_type_name: 'deposit'},
        {op_type_id: 2, op_type_name: 'expense'}
      ]);
    });
};
