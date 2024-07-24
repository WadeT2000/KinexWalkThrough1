const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || "development"]);

app.get('/', (req, res) => {
    res.send('Application is up and running')
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})


app.get('/pets', (req, res) => {
    knex('pet')
        .select('*')
        .then(pets => {
            var petNames = pets.map(pet => pet.name)
            res.json(petNames);
        })
})

// app.get('/pets', function(req, res) {
//     knex('pet')
//       .select('*')
//       .then(data => res.status(200).json(data))
//       .catch(err =>
//         res.status(404).json({
//           message:
//             'The data you are looking for could not be found. Please try again'
//         })
//       );
//   });