import { ScrollView, StyleSheet, Text } from "react-native";
import AddButton from "../components/AddButton";
import RoutineCard from "../components/RoutineCard";
import { getRoutines } from "../database/repositories/RoutineRepository";

export default function Index() {

    const routines = getRoutines();

    const cardArray = [];

    for (let i = 0; i < routines.length; i++) {

        cardArray.push(

            <RoutineCard
                key={routines[i].id}
                id={routines[i].id}
                routineName={routines[i].routineName}
                routineDescription={routines[i].routineDescription}
            />

        );

    }

    return (
        <>
            <ScrollView style={styles.indexContainer}>

                <Text style={styles.indexTitle}>
                    Rutinas
                </Text>

                {cardArray};

            </ScrollView>

            <AddButton />

        </>
    );

}

const styles = StyleSheet.create({
    indexContainer: {
        flex: 1,

    },

    indexTitle: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
        top: 30,
        marginBottom: 25,
    },
});