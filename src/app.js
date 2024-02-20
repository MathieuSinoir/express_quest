const express = require("express");

const app = express();

const movieControllers = require("./controllers/movieControllers");
const usersControllers = require("./controllers/usersControllers");

app.use(express.json());

app.get("/api/movies", movieControllers.getMovies);
app.get("/api/movies/:id", movieControllers.getMovieById);
app.get("/api/users", usersControllers.getUsers);
app.get("/api/users/:id", usersControllers.getUsersById);

app.post("/api/movies", movieControllers.postMovies);
app.post("/api/users", usersControllers.postUsers);

app.put("/api/movies/:id", movieControllers.updateMovie);
app.put("/api/users/:id", usersControllers.updateUsers);

module.exports = app;
