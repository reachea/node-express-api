const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 10,
  user: "Database_User",
  password: "Database_Password",
  database: "Database_Table",
  host: "IP_Address",
  port: 3306,
});

let inventorydb = {};

inventorydb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM products`, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};

inventorydb.findOne = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM products WHERE id = ?`, id, (err, res) => {
      if (err) {
        return reject(err);
      } else {
        return resolve(res);
      }
    });
  });
};

inventorydb.create = (newProduct) => {
  return new Promise((resolve, reject) => {
    pool.query(
      `INSERT INTO products (product_name) VALUES (?)`,
      newProduct.product_name,
      (err, res) => {
        if (err) {
          return reject(err);
        } else {
          return resolve(res);
        }
      }
    );
  });
};

module.exports = inventorydb;
