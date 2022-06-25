const knex = require('knex')(require('../../knexfile.js')['development'])


// ---------GET requests at /posts and posts/:id----------------------------------------------------
const request = (req, res) => {
    console.log('Working on get request for posts')
    
    knex('posts')
    .select('*')
    .then(data => {
        if (data.length > 0) {
          res.status(200).json(data);
        } else {
          res.status(404).send('No posts found')
        }
      })
}

const detailedRequest = (req, res) => {
    // console.table(req);
    console.log(`Working on detailed request for post ${req.params.id}`)

    knex('posts')
    .select('*')
    .where('posts.post_id', '=', parseInt(req.params.id))
    .then(data => {
        if (data.length > 0) {
          res.status(200).json(data);
        } else {
          res.status(404).send('No posts found')
        }
      })
}

// ---------PATCH request at /posts/:id/edit---------------------------------------------------------
const update = (req, res) => {

}

// ---------POST request at /posts/add---------------------------------------------------------------
const add = (req, res) => {
    console.log('Working on post request for posts')

    knex('posts')
    .insert({
        descrption: req.body.description,
        img_url: req.body.img_url,
        author_id: req.body.author_id
    })
    .then(() => {
        res.send(`Added ${req.body.title}`)
    })
}

// ---------DELETE request at /posts/:id---------------------------------------------------------
const remove = (req, res) => {
    console.log(`working on delete for 'posts/${req.params.id}/edit'`)

    knex('timestamp')
    .where('post_id', '=', req.params.id)
    .update({post_id: null})
    .then(() => {
      knex('posts')
        .where('posts.post_id', '=', parseInt(req.params.id))
        .del()
        .then(data => {
          res.status(200).json(`Number of records deleted: ${data}`);
        })
    })
}

module.exports = { request, detailedRequest, update, add, remove }
