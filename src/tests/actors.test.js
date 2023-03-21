const request = require("supertest");
const app = require("../app");
require("../models");

let actorId;

test("POST /actors ", async () => {
  const body = {
    firstName: "Bratt",
    lastName: "Pitt",
    nationality: "USA",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGAuRXzcNdBZytbUNFrUNFVgTQdmNWBfV-BM35sQhk0A&s",
    birthday:"05-09-1996"
  };
  const res = await request(app).post("/actors").send(body);
  actorId = res.body.id;
  expect(res.status).toBe(201);
  expect(res.body.name).toBe(body.name);
});

test("GET /actors", async () => {
  const res = await request(app).get(`/actors`);
  expect(res.status).toBe(200)
  expect(res.body).toHaveLength(1);
  expect(res.body[0].movies).toBeDefined();
});

test("PUT /actors/:id", async () => {
  const body = { firstName: "Bratt updated" };
  const res = await request(app).put(`/actors/${actorId}`).send(body);
  expect(res.status).toBe(200);
  expect(res.body.name).toBe(body.name);
});

test("DELETE /actors/:id", async () => {
  const res = await request(app).delete(`/actors/${actorId}`);
  expect(res.status).toBe(204);
});
