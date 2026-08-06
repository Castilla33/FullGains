import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function RoutineCard({ id, routineName, routineDescription}) {

    return (
        <Pressable
            onPress={() => router.push("/dayScreen")}
            style={styles.routineCardBox}
        >
            <View>

                <Text style={styles.routineNameStyle}>
                    {routineName}
                </Text>

                <Text style={styles.routineDescriptionStyle}>
                    {routineDescription}
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
    routineNameStyle: {
        fontWeight: "bold",
        fontSize: 25,
        marginStart: 5,
    },
    routineDescriptionStyle: {
        padding: 10,
        fontSize: 15,
    },
});