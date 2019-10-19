const express = require("express");
const {
  getBootCamps,
  getBootCamp,
  deleteBootCamp,
  updateBootCamp,
  createBootCamp
} = require("../controllers/bootcamps");

const router = express.Router();

router
  .route("/")
  .get(getBootCamps)
  .post(createBootCamp);

router
  .route("/:id")
  .get(getBootCamp)
  .put(updateBootCamp)
  .delete(deleteBootCamp);

module.exports = router;
