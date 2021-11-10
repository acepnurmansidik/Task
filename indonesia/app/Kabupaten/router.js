const express = require("express");
const multer = require("multer");
const os = require("os");
const {
  viewAddKab,
  actionAddKab,
  viewEditKab,
  actionEditKab,
} = require("./controller");
const router = express.Router();

router.get("/addkab", viewAddKab);
router.post(
  "/addkab",
  multer({ dest: os.tmpdir() }).single("image"),
  actionAddKab
);

router.get("/editkab/:id", viewEditKab);
router.put(
  "/editkab/:id",
  multer({ dest: os.tmpdir() }).single("image"),
  actionEditKab
);

module.exports = router;
