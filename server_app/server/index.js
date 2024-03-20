const express = require('express');
const router_app = require('./routes'); 
const cors = require('cors');
const pool = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());

app.use('/', router_app);

app.listen(PORT, () => {
    console.log (`server listening on port ${PORT}`);
});