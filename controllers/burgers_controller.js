var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();


// export routes
module.exports = router;

router.get("/", function(req, res) {
    burger.all(function(data) {
        var allBurgers = {
            burgers: data
        };
        console.log(allBurgers);
        res.render("index", allBurgers);
    })
})