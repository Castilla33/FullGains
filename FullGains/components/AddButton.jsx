import { Pressable, Text, StyleSheet, View } from "react-native";
import { router } from "expo-router";
import { bundledExtensions } from "expo-sqlite";

export default function AddButton() {

    return (

        <Pressable
            style={styles.button}
            onPress={() => router.push("/createRoutine")}
        >
            <View>
                <Text style={styles.text}>+</Text>
            </View>
        </Pressable>

    );

}

const styles = StyleSheet.create({

    button: {

        position: "absolute",

        right: 25,
        bottom: 45,

        width: 70,
        height: 70,

        borderRadius: 35,

        justifyContent: "center",
        alignItems: "center",

        backgroundColor: "blue",

        zIndex: 100,

    },

    text: {

        color: "white",
        fontSize: 40,

    }

});