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
    flex: 1,
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "350%",
    textAlign: "center",
    padding: "2%",
  }
})