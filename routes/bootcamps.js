const express = require("express");
const {
  getBootCamps,
  getBootCamp,
  deleteBootCamp,
  updateBootCamp,
  createBootCamp,
  getBootCampsInRadius,
  bootcampPhotoUpload,
} = require("../controllers/bootcamps");

const Bootcamp = require("../models/Bootcamp");

// Include other resource routers
const courseRouter = require("./courses");

const router = express.Router();

const advancedResults = require("../middlewares/advancedResults");
const { protect, authorize } = require("../middlewares/auth");

// Re-route into other resource routers
router.use("/:bootcampId/courses", courseRouter);

router.route("/radius/:zipcode/:distance").get(getBootCampsInRadius);

router
  .route("/")
  .get(advancedResults(Bootcamp, "courses"), getBootCamps)
  .post(protect, authorize("publisher", "admin"), createBootCamp);

router
  .route("/:id/photo")
  .put(protect, authorize("publisher", "admin"), bootcampPhotoUpload);

router
  .route("/:id")
  .get(getBootCamp)
  .put(protect, authorize("publisher", "admin"), updateBootCamp)
  .delete(protect, authorize("publisher", "admin"), deleteBootCamp);

module.exports = router;
