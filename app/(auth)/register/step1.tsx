import { Link } from "expo-router";
import { Text, View } from "react-native";

const Step1 = () => {
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
      <Text>Hello Screen 1</Text>
      <Link href="../">Go Home</Link>
    </View>
  );
};

export default Step1;
