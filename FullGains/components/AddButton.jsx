import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function AddButton() {

    return (

        <Pressable
            style={styles.button}
            onPress={() => router.push("/addRoutineScreen")}
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