const router = require("express").Router();
const applicationController = require("../../controllers/applicationController");

// Matches with /api/applications
router.route("/")
  .post(applicationController.create);

// Matches with /api/applications/:UserId
router.route("/:UserId")
  .get(applicationController.findAll)
  .put(applicationController.update)

//remove application by id
  router.route("/:id")
  .delete(applicationController.remove);

// Matches with /api/applications/:UserId/:status
router.route("/:UserId/:status")
  .get(applicationController.findByStatus);

//update status of application by application id
router.route("/:id/:status")
  .put(applicationController.update);

module.exports = router;