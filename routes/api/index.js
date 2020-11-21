const router = require("express").Router();
// const { default: API } = require("../../client/src/utils/API");
const applicationRoutes = require("./applications");
const benchmarkRoutes = require("./benchmarks");
const thirdpartyconnection = require("./thirdpartyconnection");

// Application routes
router.use("/applications", applicationRoutes);

// Benchmark routes
router.use("/benchmarks", benchmarkRoutes);

// Quotes routes
router.use("/thirdparty", thirdpartyconnection);

module.exports = router;
