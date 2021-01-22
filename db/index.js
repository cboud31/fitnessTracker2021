// Commit branch comment
// Connect to DB
const { Client } = require('pg');
const DB_NAME = 'mango';
const DB_URL = process.env.DATABASE_URL || `postgres://${DB_NAME}`;
const client = new Client(DB_URL);

// database methods

// export
module.exports = {
  client,
  // db methods
};
