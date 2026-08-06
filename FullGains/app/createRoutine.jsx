import { View, TextInput, Pressable, StyleSheet, Text } from "react-native";
import { useState } from "react";
import { router } from "expo-router";

import { createRoutine } from "../database/repositories/RoutineRepository";

export default function routineDataInsert() {

    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");

    function saveRoutine() {

        createRoutine(nombre, descripcion);

        router.replace("/");

    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Añadir Rutina                
            </Text>

            <Text style={styles.header}>
                Nombre                
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Introduce el nombre de la rutina..."
                value={nombre}
                onChangeText={setNombre}
            />

            <Text style={styles.header}>
                Descripción                
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Introduce una descripción a la rutina"
                value={descripcion}
                onChangeText={setDescripcion}
            />

            <View style={styles.subContainer}>
                    <Pressable
                        style={styles.saveButton}
                        onPress={saveRoutine}
                    >
                        <Text style={styles.buttonText}>
                            Guardar    
                        </Text>   
                    </Pressable>   
            </View>

            

        </View>

    );
}

const styles = StyleSheet.create({
        container: {
            flex: 1,

            top: 50,

        },

        subContainer: {
            alignItems: "center",
        },

        title: {
            fontSize: 35,
            fontWeight: "bold",
            textAlign: "center",
            padding: 10,
        },

        header:{
            fontSize: 25,
            fontWeight: "bold",
            left: 15,
            padding: 15

        },

        input:{
            left: 25,
            width: 250,
            padding: 5,

            borderColor: "black",
            borderWidth: 2,
        },

        saveButton: {

            width: 75,
            top: 50,
            padding: 5,

            borderWidth: 2,
            borderColor: "black",

            
            alignItems: "center",
            

            backgroundColor: "blue",
        },

        buttonText:{
            color: "white",
            fontWeight: "bold"
        }

    })

