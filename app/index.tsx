import ButtonLinks from "@/ngs-components/ButtonLinks";
import { Image } from "expo-image";
import { StyleSheet, View } from "react-native";

export default function Index() {
  const Logo = require("@/assets/images/ngs-logo.png");

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ddd",
      }}
    >
      <Image source={Logo} style={styles.image} />
      <View
        style={{
          flex: 1,
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#ddd",
        }}
      >
        <ButtonLinks display="Login" href="./(auth)/login" />
        <ButtonLinks
          display="Register"
          href="./(auth)/register/step1"
          theme="secondary"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginTop: 140,
    width: 240,
    height: 145,
  },
});
