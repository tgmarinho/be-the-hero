const request = require("supertest");
const app = require("../../../src/app");
const connection = require("../../../src/database/connection");

describe("Logon/Session", () => {
  beforeEach(async () => {
    await connection.migrate.rollback();
    await connection.migrate.latest();
  });

  afterAll(async () => {
    await connection.destroy();
  });

  it("should to logon", async () => {
    const createOngResponse = await request(app)
      .post("/ongs")
      .send({
        name: "MY UNIQUE ONG",
        email: "lar@idosos.com.br",
        whatsapp: "12346718291",
        city: "Dourados",
        uf: "MS"
      });

    const ongId = createOngResponse.body.id;

    const sessionResponse = await request(app)
      .post("/sessions")
      .send({
        id: ongId
      });

    expect(sessionResponse.body).toHaveProperty("name");
  });
});
