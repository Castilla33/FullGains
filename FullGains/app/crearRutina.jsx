import { View, TextInput, Button } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import { crearRutina } from "../database/repositories/RutinaRepository";

export default function CrearRutina() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    function guardarRutina() {

        crearRutina(nombre, descripcion);

        router.back();

    }

    return (

        <View>

            <TextInput
                placeholder="Nombre"
                value={nombre}
                onChangeText={setNombre}
            />

            <TextInput
                placeholder="Descripción"
                value={descripcion}
                onChangeText={setDescripcion}
            />

            <Button
                title="Guardar"
                onPress={guardarRutina}
            />

        </View>

    );

}