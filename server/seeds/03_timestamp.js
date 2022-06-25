/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('timestamp').del()
  await knex('timestamp').insert([
    {post_id: 1},
    {post_id: 2},
    {post_id: 3},
    {post_id: 4}
  ]);
};
