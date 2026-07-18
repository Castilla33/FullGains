import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";
import getRoutines from "../database/repositories/RoutineRepository";

export default function routineCard() {

  const hola = getRoutines();

    return (
        <Pressable
            onPress= {() => router.push("/dayScreen")}
            style={styles.routineCardBox}
        >
            <View>
                <Text style= {styles.routineName}>Rutina 1</Text>
                <Text style= {styles.routineDesc}>Esta es la descripción de la única rutina</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  routineCardBox: {
    backgroundColor: "light-gray",
    marginHorizontal: 35,
    borderColor: "gray",
    padding: 10,
    borderWidth: 5,
  },
  routineName: {
    fontWeight: "bold",
    fontSize: 25,
    marginInlineStart: 5,
  },
  routineDesc: {
    padding: 10,
    fontSize: 15
  } 

})