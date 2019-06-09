var mysql = require("mysql");

// db info
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burgers_db"
});

// connect to db
connection.connect(function (err) {
    if (err) {
        console.log("error connecting: " + err.stack);
        return;
    }

    console.log("connected as id " + connection.threadId);
});

// export connections
module.exports = connection;