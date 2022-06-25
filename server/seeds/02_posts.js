/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('posts').del()
  await knex('posts').insert([
    {author_id: 4, description: 'YAASSSS QUEEN OMGERSH', img_url: 'https://www.bing.com/ck/a?!&&p=38ce2985ea554bb6169f38efe556f350188b9321fc42624efccae76ea1032239JmltdHM9MTY1NjE4MTY4NyZpZ3VpZD0xZGVmMGVlNS01NDM0LTRhMjUtODE2Mi03MzBiMzI4NTg4OWEmaW5zaWQ9NTQ4Nw&ptn=3&fclid=8ea98dd3-f4b4-11ec-90f3-a6068c19e3fe&u=a1L2ltYWdlcy9zZWFyY2g_cT1RdWVlbiUyMENyb3duJTIwQ2FydG9vbiZGT1JNPUlRRlJCQSZpZD1DM0FEMzcxNTlFOTBCNzA1N0U2OERDRENDRDZGNTZENjg5RThCQTZB&ntb=1'},
    {author_id: 3, description: 'Saw this dog today!! So cute!!', img_url: 'https://i.pinimg.com/736x/7e/6c/20/7e6c2056eddb040aa12d680732007d74.jpg'},
    {author_id: 2, description: 'Boom diggity', img_url: ''},
    {author_id: 1, description: '\'Twud that it \'twer so simple...', img_url: 'https://www.bing.com/ck/a?!&&p=4147645de7e6c832aad3f8f1cd964018c0ca11d0c2627c3ded49257f3223e77eJmltdHM9MTY1NjE4MTYzOSZpZ3VpZD05YzRjZDBjZS00OTQwLTQ2YzYtOTk3Zi1jMjIwOTc4ZGE5YTcmaW5zaWQ9NTg5MA&ptn=3&fclid=72692593-f4b4-11ec-b7e8-70c59f35365c&u=a1L2ltYWdlcy9zZWFyY2g_cT1Hb2F0JkZPUk09SVFGUkJBJmlkPUM3NkUxREY5RjAzQUUwMjY4REY4MkExQkE0QjFBMUUzMzE3OEFFMUI&ntb=1'},
  ]);
};
