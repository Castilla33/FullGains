import db from "../database";

export function crearRutina(nombre, descripcion){

    db.runSync(

        "INSERT INTO Rutina(nombre,descripcion) VALUES (?,?)",

        [nombre,descripcion]

    );

}


export function obtenerRutinas(){

    const resultado = db.getAllSync(

        "SELECT * FROM Rutina"

    );

    return resultado;

}

export function borrarRutina(id){

    db.runSync(

        "DELETE FROM Rutina WHERE id=?",

        [id]

    );

}

export function actualizarRutina(id,nombre,descripcion){

    db.runSync(

        "UPDATE Rutina SET nombre=?, descripcion=? WHERE id=?",

        [nombre,descripcion,id]

    );

}