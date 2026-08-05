import { View, StyleSheet, Text } from "react-native";
import RoutineCard from "../components/RoutineCard";
import AddButton from "../components/AddButton";
import { getRoutines } from "../database/repositories/RoutineRepository";

export default function Index() {

    const rutinas = getRoutines();

    const tarjetas = [];

    for (let i = 0; i < rutinas.length; i++) {

        tarjetas.push(

            <RoutineCard
                key={rutinas[i].id}
                id={rutinas[i].id}
                nombre={rutinas[i].nombre}
                descripcion={rutinas[i].descripcion}
            />

        );

    }

    return (

        <View style={styles.container}>

            <Text style={styles.title}>
                Rutinas
            </Text>

            {tarjetas};

           <AddButton />
        </View>

    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    title: {
        fontSize: 35,
        fontWeight: "bold",
        textAlign: "center",
        padding: 20,
        marginTop: 30,
    },
});