import db from "./database";

export default function initDatabase() {
    db.execSync(`
        CREATE TABLE IF NOT EXISTS Rutina (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nombre TEXT NOT NULL,
            descripcion TEXT
        );
    `);
}