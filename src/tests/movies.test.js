const request = require("supertest");
const app = require("../app");
require("../models");
const Actors= require('../models/Actors');
const Genre = require('../models/Genre')
const Directors= require('../models/Directors')

let movieId;

test("POST /movies ", async () => {
  const body = {
    name: "Harry Potter",
    image: "Pitt",
    synopsis: "USAbyyy",
    realeseYear:2023
  };
  const res = await request(app).post("/movies").send(body);
  movieId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(body.name);
});

test("GET /movies", async () => {
  const res = await request(app).get(`/movies`);
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1);
  expect(res.body[0].actors).toBeDefined();
  expect(res.body[0].directors).toBeDefined();
  expect(res.body[0].genres).toBeDefined();
});

test("PUT /movies/:id", async () => {
  const body = { name: "harry updated" };
  const res = await request(app).put(`/movies/${movieId}`).send(body);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(body.name);
});


test("POST /movies/:id/actors should set the movie actors", async () => {
    const actors = await Actors.create({
        firstName: "Bratt",
        lastName: "Pitt",
        nationality: "USA",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAuRXzcNdBZytbUNFrUNFVgTQdmNWBfV-BM35sQhk0A&s",
        birthday:"05-09-1996"
      });
    const res = await request(app)
      .post(`/movies/${movieId}/actors`)
      .send([actors.id]);
    await actors.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  test("POST /movies/:id/genres should set the movie genres", async () => {
    const genres = await Genre.create({
        name: "action"
      });
    const res = await request(app)
      .post(`/movies/${movieId}/genres`)
      .send([genres.id]);
    await genres.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });

  test("POST /movies/:id/directors should set the movie directors", async () => {
    const directors = await Directors.create({
        firstName: "Bratt",
        lastName: "Pitt",
        nationality: "USA",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAuRXzcNdBZytbUNFrUNFVgTQdmNWBfV-BM35sQhk0A&s",
        birthday:"05-09-1996"
      });
    const res = await request(app)
      .post(`/movies/${movieId}/directors`)
      .send([directors.id]);
    await directors.destroy();
    expect(res.status).toBe(200);
    expect(res.body).toHaveLength(1);
  });


test("DELETE /movies/:id", async () => {
  const res = await request(app).delete(`/movies/${movieId}`);
  expect(res.status).toBe(204);
});
