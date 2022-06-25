/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('author').del()
  await knex('author').insert([
    { first_name: 'Kolby', last_name: 'Landon' },
    { first_name: 'Isaac', last_name: 'St Pierre' },
    { first_name: 'Lauretta', last_name: 'St Pierre' },
    { first_name: 'Noelle', last_name: 'Landon' }
  ]);
};
