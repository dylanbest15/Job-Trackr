const router = require("express").Router();
const passportController = require("../../controllers/passportController");
const passport = require("../../config/passport");

// Matches with /api/passport/login
router.route("/login")
  .post(passport.authenticate('local'), passportController.loginUser);

// Matches with /api/passport/signup
router.route("/signup")
  .post(passportController.signupUser);

// Matches with /api/passport/logout
router.route("/logout")
  .get(passportController.logoutUser);

// Matches with /api/passport/user_data
router.route("/user_data")
  .get(passportController.getUserData);

module.exports = router;