const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
const controller = require('../controllers/controller');
const get_news_api = require('../middleware/get_news');

router
    .get("/news", get_news_api, controller.getallnews)
    .post("/contact", bodyParser(), controller.add_contact)
    .get("/login", bodyParser(), controller.login)

module.exports = router;