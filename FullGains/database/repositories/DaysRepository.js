import db from "../database";

export function createDay(routineName, routineDescription, routineId){

    db.runSync(

        "INSERT INTO Days(dayName, dayDescription, routineId) VALUES (?,?,?)",

        [dayName, dayDescription, routineId]

    );

}


export function getDays(){

    const days = db.getAllSync(

        "SELECT * FROM Days"

    );

    return days;

}

export function delDay(dayId){

    db.runSync(

        "DELETE FROM Days WHERE dayId=?",

        [dayId]

    );

}

export function updateRoutines(dayId,dayName, dayDescription){

    db.runSync(

        "UPDATE Days SET dayName=?, dayDescription=? WHERE dayId=?",

        [dayName,dayDescription,dayId]

    );

}