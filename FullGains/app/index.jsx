import { View, StyleSheet, Text } from "react-native";
import RoutineCard from "../components/routineCard";

export default function Index() {
    return (
        <View>
            <Text style={styles.title}>Rutinas</Text>
            <RoutineCard />
        </View>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
        marginTop: 30,
    },
});