const router = require("express").Router();
const benchmarkController = require("../../controllers/benchmarkController");

// Matches with /api/benchmarks
router.route("/")
  .get(benchmarkController.findAll)
  .get(benchmarkController.findByUser)
  .post(benchmarkController.create);

module.exports = router;