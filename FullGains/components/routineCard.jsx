import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function RoutineCard({ id, nombre, descripcion }) {

    return (
        <Pressable
            onPress={() => router.push("/dayScreen")}
            style={styles.routineCardBox}
        >
            <View>

                <Text style={styles.routineName}>
                    {nombre}
                </Text>

                <Text style={styles.routineDesc}>
                    {descripcion}
                </Text>

            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    routineCardBox: {
        backgroundColor: "lightgray",
        marginHorizontal: 35,
        borderColor: "black",
        padding: 10,
        borderWidth: 2,
        marginVertical: 10,
    },
    routineName: {
        fontWeight: "bold",
        fontSize: 25,
        marginStart: 5,
    },
    routineDesc: {
        padding: 10,
        fontSize: 15,
    },
});