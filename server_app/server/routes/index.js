const express = require('express');
const router = express.Router();
const controller = require('../controllers/controller');

router
    .get("/news", controller.getallnews)
    .post("/contact", controller.add_contact)
    .get("/login", controller.login)

module.exports = router;