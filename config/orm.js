var connection = require("./connection.js");

// creates array of question marks to prevent sql injection
// function printQuestionMarks(num) {
//     var arr = [];

//     for (var i = 0; i < num; i++) {
//         arr.push("?");
//     }

//     return arr.toString();
// }

// function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//     var arr = [];

//     // loop through the keys and push the key/value as a string int arr
//     for (var key in ob) {
//         var value = ob[key];
//         // check to skip hidden properties
//         if (Object.hasOwnProperty.call(ob, key)) {
//             // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
//             if (typeof value === "string" && value.indexOf(" ") >= 0) {
//                 value = "'" + value + "'";
//             }
//             // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
//             // e.g. {sleepy: true} => ["sleepy=true"]
//             arr.push(key + "=" + value);
//         }
// }


var orm = {
    selectAll: function(tableName, callback) {
        var query = "SELECT * FROM " + tableName;
        
        console.log("query: " + query);

        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    // insertOne: function(tableName, colName, val, callback) {
    //     query = "INSERT INTO " + tableName;
    //     query += " (" + colName + ") ";
    //     query += "VALUES (";
    //     query += printQuestionMarks(val.length);
    //     query += ") ";

    //     connection.query(query, vals, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     })
    // },

    insertOne: function (tableName, colName, val, callback) {
        query = "INSERT INTO " + tableName;
        query += " (" + colName + ") ";
        query += "VALUES (";
        query += "?";
        query += ") ";

        console.log("query: " + query);

        connection.query(query, val, function (err, result) {
            if (err) throw err;
            callback(result);
        })
    },

    // An example of objColVals would be {name: panther, sleepy: true}
    // updateOne: function (tableName, objColVals, condition, callback) {
    //     query = "UPDATE " + tableName;
    //     query += " SET " + objToSql(objColVals);
    //     query += " WHERE " + condition;

    //     connection.query(query, function (err, result) {
    //         if (err) throw err;
    //         callback(result);
    //     })

    // },

    updateOne: function (tableName, colName, colValue, condition, callback) {
        query = "UPDATE " + tableName;
        query += " SET " + colName + " = " + colValue;
        query += " WHERE " + condition;

        console.log("query: " + query);

        connection.query(query, function (err, result) {
            if (err) throw err;
            callback(result);
        })

    }
}


module.exports = orm;