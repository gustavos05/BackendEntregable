const { getAll, create, getOne, remove, update } = require('../controllers/genres.controllers');
const express = require('express');

const genreR = express.Router();

genreR.route('/')
    .get(getAll)
    .post(create);

genreR.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = genreR;