const { getAll, create, getOne, remove, update } = require('../controllers/directors.controllers');
const express = require('express');

const directorR = express.Router();

directorR.route('/')
    .get(getAll)
    .post(create);

directorR.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = directorR;