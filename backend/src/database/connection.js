const knex = require("knex");
const configuration = require("../../knexfile");

const connection =
  process.env.NODE_ENV === "test"
    ? knex(configuration.test)
    : knex(configuration.development);

module.exports = connection;
