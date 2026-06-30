const express = require("express");

const router = express.Router();

const {

    health,

    info,

} = require("../controllers/app.controller");

router.get("/health", health);

router.get("/info", info);

module.exports = router;
