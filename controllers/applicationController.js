const db = require("../models");

module.exports = {
  findAll: function (req, res) {
    db.Application
      .findAll({
        where: {
          UserId: req.params.UserId
        }
      }).then(applications => res.json(applications))
      .catch(err => console.log(err));
  },
  findByStatus: function (req, res) {
    db.Application
      .findAll({
        where: {
          UserId: req.params.UserId,
          status: req.params.status
        }
      }).then(applications => res.json(applications))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.Application
      .create(req.body)
      .then(application => res.json(application))
      .catch(err => console.log(err));
  },
  update: function (req, res) {
    db.Application
      .update(
        {
          status:
            req.query.status
        },
        {
          where: {
            id: req.params.id
          }
        }).then(application => res.json(application))
          .catch(err => console.log(err));
  },
  remove: function (req, res) {
    console.log(req.params.id);
    db.Application
      .destroy({
        where: {
          id: req.params.id
        }
      }).then(application => res.json(application))
      .catch(err => console.log(err));
  }
}