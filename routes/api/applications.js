const router = require("express").Router();
const applicationController = require("../../controllers/applicationController");

// Matches with /api/application
router.route("/")
  .post(applicationController.create);

// Matches with /api/application/:UserId
router.route("/:UserId")
  .put(applicationController.update)
  .delete(applicationController.remove);

// Matches with /api/application/:UserId/:status
router.route("/:UserId/:status")
  .get(applicationController.findByStatus);

module.exports = router;