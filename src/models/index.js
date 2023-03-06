const Actors=require("./Actors");
const Movies=require("./Movies")
const Directors=require("./Directors")
const Genre=require("./Genre")

Movies.belongsToMany(Actors,{through:"MoviesActors"});
Actors.belongsToMany(Movies,{through:"MoviesActors"});


Movies.belongsToMany(Directors,{through:"MoviesDirectors"});
Directors.belongsToMany(Movies,{through:"MoviesDirectors"});

Movies.belongsToMany(Genre,{through:"MoviesGenres"});
Genre.belongsToMany(Movies,{through:"MoviesGenres"});

