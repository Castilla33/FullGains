import { View, StyleSheet, Text } from "react-native";
import BotonRutina from "../components/tarjetaRutina";

export default function Inicio() {
  return (
    <View>
      <Text style={styles.titulo}>Rutinas</Text>
      <BotonRutina/>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    fontSize: 35,
    fontWeight: "bold",
    textAlign: "center",
    padding: 20,
    marginTop: 30,
  }
})