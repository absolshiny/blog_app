const express = require('express');
const router_app = require('./routes'); 
const app = express();
const PORT = process.env.PORT || 3000;
const pool = require('./db');

app.use('/', router_app);

app.listen(PORT, () => {
    console.log (`server listening on port ${PORT}`);
});