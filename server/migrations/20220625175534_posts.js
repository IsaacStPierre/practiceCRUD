/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('posts', table => {
        table.increments('post_id');
        table.string('description', 1020);
        table.string('img_url', 510);
        table.integer('author_id');
        table.foreign('author_id').references('author.author_id')
    })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('posts', table => {
        table.dropForeign('author_id')
    })
    .then(function () {
        return knex.schema.dropTableIfExists('posts');
    })
};
