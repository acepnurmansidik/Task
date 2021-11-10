const express = require("express");
const router = express.Router();
const { viewIndex, viewSearch, viewKab } = require("./controller");

router.get("/", viewIndex);

router.get("/kab", viewKab);
router.post("/", viewSearch);

module.exports = router;
