const router = require("express").Router();
const axios = require("axios");

// Quote routes
router.get("/quotes", async (req, res) => {
    try {
        const response = await axios.get("https://zenquotes.io/api/random")
        res.json(response.data)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// Job category Routes
router.get("/categories", async (req, res) => {
    try {
        const response = await axios.get("https://remotive.io/api/remote-jobs/categories");
        res.json(response.data);
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// Job search routes
router.get("/jobs/:category", async (req, res) => {
    try {
        const response = await axios.get(`https://remotive.io/api/remote-jobs?category=${req.params.category}`);
        res.json(response.data);
    }
    catch (err) {
        res.status(500).json(err);
    }
});


module.exports = router;
