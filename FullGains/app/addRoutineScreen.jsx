import { router } from "expo-router";
import { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { createRoutine } from "../database/repositories/RoutineRepository";

export default function addRoutineScreen() {

    const [routineName, setRoutineName] = useState("");
    const [routineDescription, setRoutineDescription] = useState("");

    function saveRoutine() {

        if (routineName == "") {
            console.log("Declare routine name");
        } else {

            createRoutine(routineName, routineDescription);

            router.replace("/");

            console.log({routineName});

        }
        

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
                value={routineName}
                onChangeText={setRoutineName}
            />

            <Text style={styles.header}>
                Descripción                
            </Text>

            <TextInput
                style={styles.input}
                placeholder="Introduce una descripción a la rutina"
                value={routineDescription}
                onChangeText={setRoutineDescription}
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

                    <Text></Text>   
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

