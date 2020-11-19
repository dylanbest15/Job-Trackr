const { default: Axios } = require("axios");

const router = require("express").Router();
const axios = require("axios");

// Application routes
router.get("/quotes", async (req, res) => {
   try{
        const response = await Axios.get("https://zenquotes.io/api/random")
         res.json(response.data)
   }
   catch (err) {
       res.status(500).json(err)
   }
});


module.exports = router;
