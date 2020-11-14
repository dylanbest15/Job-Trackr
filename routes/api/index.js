const router = require("express").Router();
const applicationRoutes = require("./applications");
const benchmarkRoutes = require("./benchmarks");

// Application routes
router.use("/applications", applicationRoutes);

// Benchmark routes
router.use("/benchmarks", benchmarkRoutes);

module.exports = router;
