const express = require("express");
const OngController = require("./controllers/OngController");
const IncidentController = require("./controllers/IncidentController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const Validation = require("./controllers/middlewares/validations");

const routes = express.Router();

routes.post("/sessions", Validation.sessions, SessionController.create);

routes.post("/ongs", Validation.createOngs, OngController.create);
routes.get("/ongs", OngController.index);

routes.get("/profile", Validation.profile, ProfileController.index);

routes.post("/incidents", Validation.createIncident, IncidentController.create);
routes.get("/incidents", Validation.indexIncidents, IncidentController.index);
routes.delete(
  "/incidents/:id",
  Validation.deleteIncident,
  IncidentController.delete
);

module.exports = routes;
