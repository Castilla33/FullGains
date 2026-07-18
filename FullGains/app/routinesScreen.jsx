import { View, StyleSheet, Text } from "react-native";
import routineCard from "../components/routineCard";

export default function Inicio() {
  return (
    <View>
      <Text style={styles.title}>Rutinas</Text>
      <BotonRutina/>
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
  }
})