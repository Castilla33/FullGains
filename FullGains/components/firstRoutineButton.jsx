import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function routineCard() {
    return (
        <Pressable
            onPress= {() => router.push("/createRoutine")}
            style={styles.firstRoutineBox}
        >
            <View>
                <Text style= {styles.routineName}>Rutina 1</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    firstRoutineBox: {
        borderColor: "blue",

    }
})