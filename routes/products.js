const express = require("express");
const router = express.Router();

const products = require('../__mock__/products.json')

router.get("/", (req, res, next) => {
 
    res.json(products);
 
});

module.exports = router;
