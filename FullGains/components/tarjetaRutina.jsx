import { View, Pressable, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

export default function tarjetaRutina() {
    return (
        <Pressable
            onPress= {() => router.push("/perfil")}
            style={styles.rutinaCard}
        >
            <View>
                <Text style= {styles.nombre}>Rutina 1</Text>
                <Text style= {styles.descripcion}>Esta es la descripción de la única rutina</Text>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
  rutinaCard: {
    backgroundColor: "light-gray",
    marginHorizontal: 35,
    borderColor: "gray",
    padding: 10,
    borderWidth: 5,
  },
  nombre: {
    fontWeight: "bold",
    fontSize: 25,
    marginInlineStart: 5,
  },
  descripcion: {
    padding: 10,
    fontSize: 15
  } 

})