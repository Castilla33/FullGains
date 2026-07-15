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
    flex: 1,
    fontSize: "350%",
    backgroundColor: "light-gray",
    marginHorizontal: "13%",
    borderColor: "gray",
    padding: "2%",
    borderWidth: 5,
    borderColor: "gray",
  },
  nombre: {
    fontFamily: "Arial",
    fontWeight: "bold",
    fontSize: "50%",
  },
  descripcion: {
    fontFamily: "Arial",
    padding: "2%",
    fontSize: "30%"
  } 

})