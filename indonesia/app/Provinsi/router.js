const express = require("express");
const router = express.Router();
const multer = require("multer");
const os = require("os");
const {
  viewAddProv,
  actionAddProv,
  viewEditProv,
  actionEditProv,
  acttionDeleteProv,
} = require("./constroller");

// router.get("/", viewIndex);

// ADD
router.get("/addprov", viewAddProv);
router.post(
  "/addprov",
  multer({ dest: os.tmpdir() }).single("image"),
  actionAddProv
);

// DELETE
router.get("/editprov/:id", viewEditProv);
router.put("/editprov/:id", actionEditProv);

// DELETE
router.delete("/deleteprov/:id", acttionDeleteProv);

module.exports = router;
