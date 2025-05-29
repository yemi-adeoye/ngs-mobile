import { Link } from "expo-router";
import { Text, View } from "react-native";

const LoginPage = () => {
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
      <Text>Hello Login Screen</Text>
      <Link href="../">Go Home</Link>
    </View>
  );
};

export default LoginPage;
