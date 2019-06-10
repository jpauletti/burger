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

router.get("/api/burgers", function(req, res) {
    burger.all(function (data) {
        res.json(data);
    })
})

router.post("/api/burgers", function(req, res) {
    var newBurger = req.body.burger;
    console.log(newBurger);
    burger.create(newBurger, function(response) {
        console.log("new burger added");
        res.status(201).end();
    });
})