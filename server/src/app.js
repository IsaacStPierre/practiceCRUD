const express = require('express');
const app = express();
const port = 8080;
const knex = require('knex')(require('../knexfile.js')['development']);
const { postRoutes } = require("./routes/index.js");


app.use(express.json())
app.use('/', postRoutes)

app.listen(port, () => {
    console.log(`Your Knex and Express apps are running successfully on port ${port}!`)
  })