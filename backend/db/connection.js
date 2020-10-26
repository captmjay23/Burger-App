const mysql = require("mysql");

const dbConfig = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "boss_testing",
  port: 3307,
});

const dbConnection = (query) => {
  return new Promise((resolve, reject) => {
    dbConfig.getConnection((err, db) => {
      if (err) {
        console.log("Database Connection", err.message);
        reject(err);
      } else {
        db.query(query, (err, result) => {
          if (err) {
            console.log("Database Query Error:", err);
            reject(err);
          } else {
            resolve(result);
          }
        });
      }
    });
  });
};

module.exports = dbConnection;
