import db from "../database";

export function createRoutine(routineName, rotuineDescription){

    db.runSync(

        "INSERT INTO Rutina(routineName, rotuineDescription) VALUES (?,?)",

        [routineName, rotuineDescription]

    );

}


export function getRoutines(){

    const routines = db.getAllSync(

        "SELECT * FROM Rutina"

    );

    return routines;

}

export function delRoutines(id){

    db.runSync(

        "DELETE FROM Rutina WHERE id=?",

        [id]

    );

}

export function updateRoutines(id,routineName, rotuineDescription){

    db.runSync(

        "UPDATE Rutina SET routineName=?, rotuineDescription=? WHERE id=?",

        [routineName,rotuineDescription,id]

    );

}