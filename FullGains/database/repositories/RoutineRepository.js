import db from "../database";

export function createRoutine(nombre, descripcion){

    db.runSync(

        "INSERT INTO Rutina(nombre,descripcion) VALUES (?,?)",

        [nombre,descripcion]

    );

}


export function getRoutines(){

    const resultado = db.getAllSync(

        "SELECT * FROM Rutina"

    );

    return resultado;

}

export function delRoutines(id){

    db.runSync(

        "DELETE FROM Rutina WHERE id=?",

        [id]

    );

}

export function updateRoutines(id,nombre,descripcion){

    db.runSync(

        "UPDATE Rutina SET nombre=?, descripcion=? WHERE id=?",

        [nombre,descripcion,id]

    );

}