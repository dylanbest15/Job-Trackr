const db = require("../models");
const passport = require("../config/passport");

module.exports = {
  loginUser: function (req, res) {
    res.json({
      email: req.user.email,
      id: req.user.id
    });
  },
  signupUser: function (req, res) {
    db.User.create({
      email: req.body.email,
      password: req.body.password
    })
      .then(() => {
        res.redirect(307, "/api/passport/login");
      })
      .catch(err => {
        res.status(401).json(err);
      });
  },
  logoutUser: function (req, res) {
    req.logout();
    res.redirect("/");
  },
  getUserData: function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        email: req.user.email,
        id: req.user.id
      });
    }
  }
}