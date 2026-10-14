import Database from "better-sqlite3";
import path from "node:path";

const dbPath = path.resolve("data/clients.db");
const db = new Database(dbPath);

const insert = db.prepare(`
  INSERT INTO clients (name, email, address, latitude, longitude)
  VALUES (?, ?, ?, ?, ?)
`);

const clients = [
  ["Client Besançon", "besancon@example.com", "Besançon", 47.237829, 6.024053],
  ["Client Montbéliard", "montbeliard@example.com", "Montbéliard", 47.510238, 6.798819],
  ["Client Belfort", "belfort@example.com", "Belfort", 47.639674, 6.863849],
  ["Client Dijon", "dijon@example.com", "Dijon", 47.322047, 5.04148],
  ["Client Lyon", "lyon@example.com", "Lyon", 45.764043, 4.835659],
];

const insertMany = db.transaction((rows) => {
  for (const row of rows) insert.run(...row);
});

insertMany(clients);
console.log("Données de démonstration insérées.");
db.close();