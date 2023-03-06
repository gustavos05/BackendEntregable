const { getAll, create, getOne, remove, update,setMoviesDirectors,setMoviesGenres,setMoviesActors} = require('../controllers/movies.controllers');
const express = require('express');

const moviesR = express.Router();

moviesR.route('/')
    .get(getAll)
    .post(create);

moviesR.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

moviesR.route("/:id/directors")
.post(setMoviesDirectors);

moviesR.route("/:id/genres")
.post(setMoviesGenres)

moviesR.route("/:id/actors")
.post(setMoviesActors)

module.exports = moviesR;