import Database from "better-sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "app/data/dua_main.sqlite"); // adjust if placed elsewhere
const db = new Database(dbPath, { readonly: true });

export default db;
