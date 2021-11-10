const express = require("express");
const router = express.Router();
const { viewIndex, viewSearch } = require("./controller");

router.get("/", viewIndex);

router.post("/", viewSearch);

module.exports = router;
