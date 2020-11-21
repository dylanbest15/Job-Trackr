const db = require("../models");

module.exports = {
  findByStatus: function (req, res) {
    db.Application
      .findAll({
        where: {
          status: req.params.status,
          UserId: req.params.userId
        }
      }).then(applications => res.json(applications))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.Application
      .create( req.body // is this right ??
        // {
        // job_title: req.query.jobTitle,
        // company_name: req.query.companyName,
        // city: req.query.city,
        // state: req.query.state,
        // job_link: req.query.jobLink,
        // status: "pending",
        // }
      ).then(application => res.json(application))
      .catch(err => console.log(err));
  },
  update: function (req, res) {
    db.Application
      .update({ status: req.query.status }), {
        where: {
          id: req.params.id
        }
      }.then(application => res.json(application))
      .catch(err => console.log(err));
  },
  remove: function (req, res) {
    db.Application
      .destroy({
        where: {
          id: req.params.id
        }
      }).then(application => res.json(application))
      .catch(err => console.log(err));
  }
}