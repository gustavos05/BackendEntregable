const { getAll, create, getOne, remove, update} = require('../controllers/actors.controllers');
const express = require('express');

const ActorsR = express.Router();

ActorsR.route('/')
    .get(getAll)
    .post(create);

ActorsR.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);



module.exports = ActorsR;