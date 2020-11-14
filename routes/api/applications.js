const router = require("express").Router();
const applicationController = require("../../controllers/applicationController");

// Matches with /api/application
router.route("/")
  .get(applicationController.findByStatus)
  .post(applicationController.create)
  .put(applicationController.update)
  .delete(applicationController.remove);

module.exports = router;