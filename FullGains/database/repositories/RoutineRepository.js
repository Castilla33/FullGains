import db from "../database";

export function createRoutine(routineName, routineDescription){

    db.runSync(

        "INSERT INTO Routine(routineName, routineDescription) VALUES (?,?)",

        [routineName, routineDescription]

    );

}


export function getRoutines(){

    const routines = db.getAllSync(

        "SELECT * FROM Routine"

    );

    return routines;

}

export function delRoutines(routineId){

    db.runSync(

        "DELETE FROM Routine WHERE routineId=?",

        [routineId]

    );

}

export function updateRoutines(routineId, routineName, routineDescription){

    db.runSync(

        "UPDATE Routine SET routineName=?, routineDescription=? WHERE routineId=?",

        [routineName,routineDescription,routineId]

    );

}