const router = require("express").Router();
const benchmarkController = require("../../controllers/benchmarkController");

// Matches with /api/benchmarks
router.route("/")
  .get(benchmarkController.findAll);

// Matches with /api/benchmarks/:userId
router.route("/:userId")
  .get(benchmarkController.findByUser);

// Matches with /api/benchmarks/:userId/:benchmarkId
router.route("/:userId/:benchmarkId")
  .post(benchmarkController.create);

module.exports = router;