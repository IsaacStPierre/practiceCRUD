/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('timestamp', table => {
        //table.increments('timestamp_id');
        table.timestamp('created_at').defaultTo(knex.fn.now());
        table.integer('post_id');
        table.foreign('post_id').references('posts.post_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('timestamp', table => {
        table.dropForeign('post_id')
    })
    .then(function () {
        return knex.schema.dropTableIfExists('timestamp');
    })
};
