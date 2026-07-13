import { View, Text, Button } from "react-native";
import { router } from "expo-router";

export default function Perfil() {
  return (
    <View>
      <Text>Esta es la pantalla Perfil</Text>

      <Button
        title="Volver"
        onPress={() => router.back()}
      />
    </View>
  );
}