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