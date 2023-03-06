const express = require('express');
const moviesR = require('./movies.routes');
const router = express.Router();
const ActorsR=require('./actors.routes');
const directorR = require('./directors.routes');
const genreR = require('./genres.route');



router.use('/movies',moviesR);
router.use('/actors',ActorsR);
router.use('/directors',directorR);
router.use('/genres',genreR)

module.exports = router;