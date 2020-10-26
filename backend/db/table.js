const DBConnection = require("../db/connection");

module.exports = async () => {
  const createTable =
    `CREATE TABLE IF NOT EXISTS products (` +
    `id INT(255) NOT NULL PRIMARY KEY AUTO_INCREMENT, ` +
    `name VARCHAR(255) NOT NULL, ` +
    `price INT(255) NOT NULL ` +
    `);`;
  await DBConnection(createTable);
};
