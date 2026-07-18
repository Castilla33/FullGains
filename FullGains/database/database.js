import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseSync("fullgains.db");

export default db;