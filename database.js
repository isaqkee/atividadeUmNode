const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database(':memory:'); 

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS products (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    price REAL,
    stock INTEGER
  )`);

  db.run("INSERT INTO products (name, price, stock) VALUES ('Produto 3', 15.0, 80)");
  db.run("INSERT INTO products (name, price, stock) VALUES ('Produto 4', 25.0, 60)");
  db.run("INSERT INTO products (name, price, stock) VALUES ('Produto 5', 30.0, 40)");
  db.run("INSERT INTO products (name, price, stock) VALUES ('Produto 6', 35.0, 70)");
  db.run("INSERT INTO products (name, price, stock) VALUES ('Produto 7', 40.0, 90)");
  db.run("INSERT INTO products (name, price, stock) VALUES ('Produto 8', 45.0, 100)");
});

module.exports = db;