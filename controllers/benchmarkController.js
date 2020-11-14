const db = require("./models");

module.exports = {
  findAll: function (req, res) {
    db.Benchmark
      .findAll()
      .then(benchmarks => res.json(benchmarks))
      .catch(err => console.log(err));
  },
  findByUser: function (req, res) {
    db.UserBenchmark
      .findAll({
        where: {
          UserId: req.query.userId
        }
      }).then(userBenchmarks => res.json(userBenchmarks))
      .catch(err => console.log(err));
  },
  create: function (req, res) {
    db.UserBenchmark
      .create({
        UserId: req.query.userId,
        BenchmarkId: req.query.benchmarkId
      }).then(benchmarks => res.json(benchmarks))
      .catch(err => console.log(err));
  }
}