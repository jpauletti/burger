// * Inside `burger.js`, import `orm.js` into `burger.js`

// * Also inside `burger.js`, create the code that will call the ORM functions using burger specific input for the ORM.

// * Export at the end of the `burger.js` file.

var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },

    create: function(burgerName, cb) {
        orm.insertOne("burgers", "burger_name", burgerName, function(res) {
            cb(res);
        });
    },

    update: function(colName, colValue, condition, cb) {
        orm.updateOne("burgers", colName, colValue, condition, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;