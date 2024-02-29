const { Pool } = require('pg');

const pool = new Pool({
  user: 'david',
  password: 'david123',
  host: '172.17.0.3',
  port: '5432',
  database: 'Bloginfo',
});

module.exports = pool;