// make a function where we can call our db as import and then operate on the pool returned by the function
const Pool = require("pg").Pool;

const db = new Pool({
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  database: process.env.PG_DATABASE,
});

module.exports = db;
