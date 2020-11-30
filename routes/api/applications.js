const router = require("express").Router();
const applicationController = require("../../controllers/applicationController");

// Matches with /api/applications
router.route("/")
  .post(applicationController.create);

// Matches with /api/applications/:UserId
router.route("/:UserId")
  .get(applicationController.findAll)
  .put(applicationController.update)

// Matches with /api/applications/recent/:UserId
router.route("/recent/:UserId")  
  .get(applicationController.findByLastFive)

//application id
  router.route("/:id")
  .delete(applicationController.remove);

// Matches with /api/applications/:UserId/:status
router.route("/:UserId/:status")
  .get(applicationController.findByStatus);

module.exports = router;