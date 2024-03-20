const { Pool } = require('pg');

const pool = new Pool({
  user: 'david',
  password: 'david123',
  host: 'db',
  port: '5432',
  database: 'Bloginfo',
});

module.exports = pool;