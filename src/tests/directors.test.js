const request = require("supertest");
const app = require("../app");
require("../models");

let directorId;

test("POST /directors ", async () => {
  const body = {
    firstName: "Bratt",
    lastName: "Pitt",
    nationality: "USA",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAuRXzcNdBZytbUNFrUNFVgTQdmNWBfV-BM35sQhk0A&s",
    birthday:"05-09-1996"
  };
  const res = await request(app).post("/directors").send(body);
  directorId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(body.name);
});

test("GET /directors", async () => {
  const res = await request(app).get(`/directors`);
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1);
  expect(res.body[0].movies).toBeDefined();
});

test("PUT /directors/:id", async () => {
  const body = { firstName: "Bratt updated" };
  const res = await request(app).put(`/directors/${directorId}`).send(body);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(body.name);
});

test("DELETE /directors/:id", async () => {
  const res = await request(app).delete(`/directors/${directorId}`);
  expect(res.status).toBe(204);
});