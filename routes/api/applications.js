const router = require("express").Router();
const applicationController = require("../../controllers/applicationController");

// Matches with /api/application
router.route("/")
  .post(applicationController.create);

// Matches with /api/application/:userId
router.route("/:userId")
  .put(applicationController.update)
  .delete(applicationController.remove);

// Matches with /api/application/:userId/:status
router.route("/:userId/:status")
  .get(applicationController.findByStatus);

module.exports = router;