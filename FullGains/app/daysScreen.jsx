import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text } from "react-native";
import AddButton from "../components/AddButton";
import DayCard from "../components/DayCard";
import { getDays } from "../database/repositories/DaysRepository";

export default function dayScreen() {

    const days = getDays();
    const routineId = useLocalSearchParams();

    const cardArray = [];

    for (let i = 0; i < days.length; i++) {

        cardArray.push(

            <DayCard
                key={days[i].dayId}
                dayId={days[i].dayId}
                dayName={days[i].dayName}
                dayDescription={days[i].dayDescription}
            />

        );

    }

    return (
        <>
            <ScrollView style={styles.indexContainer}>

                <Text style={styles.indexTitle}>
                    Días
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