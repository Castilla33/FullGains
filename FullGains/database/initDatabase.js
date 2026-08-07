import db from "./database";

export default function initDatabase() {

    db.execSync(`

        CREATE TABLE IF NOT EXISTS Routine (
            routineId INTEGER PRIMARY KEY AUTOINCREMENT,
            routineName TEXT NOT NULL,
            routineDescription TEXT
        );

        CREATE TABLE IF NOT EXISTS Days (
            dayId INTEGER PRIMARY KEY AUTOINCREMENT,
            dayName TEXT NOT NULL,
            dayDescription TEXT,
            routineId INTEGER,
            FOREIGN KEY (routineId) REFERENCES Routine(routineId)
        );

        CREATE TABLE IF NOT EXISTS Exercises (
            exercisesId INTEGER PRIMARY KEY AUTOINCREMENT,
            exerciseName TEXT NOT NULL,
            exerciseDescription TEXT,
            exerciseWeight FLOAT,
            exerciseMaxWeight FLOAT,
            setNumber INTEGER,
            reps INTEGER,
            dayId INTEGER,
            FOREIGN KEY (dayId) REFERENCES Days(dayId)
        );

    `);
}