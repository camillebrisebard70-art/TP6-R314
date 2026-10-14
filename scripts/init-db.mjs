import Database from "better-sqlite3";
import path from "node:path";

const dbPath = path.resolve("data/clients.db");
const db = new Database(dbPath);

db.exec(`
  CREATE TABLE IF NOT EXISTS clients (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT,
    address TEXT,
    latitude REAL NOT NULL,
    longitude REAL NOT NULL
  );
`);

console.log("Base SQLite initialisée : data/clients.db");
db.close();