import { Link, RelativePathString } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

type Props = {
  display: string;
  href: RelativePathString;
  theme?: keyof typeof themes;
};

const themes = {
  primary: {
    backgroundColor: "#008080",
    color: "#fff",
  },
  secondary: {
    backgroundColor: "##fff",
    color: "##000",
  },
};

const ButtonLinks = ({ display, href, theme }: Props) => {
  const themeSelected: keyof typeof themes = theme ? theme : "primary";

  const activeTheme = themes[`${themeSelected}`];
  return (
    <View
      style={{
        flexDirection: "row",
        marginBottom: 30,
      }}
    >
      <View
        style={{
          ...styles.containerStyle,
          backgroundColor: activeTheme.backgroundColor,
        }}
      >
        <Link href={href}>
          <Text style={{ ...styles.displayStyle, color: activeTheme.color }}>
            {display}
          </Text>
        </Link>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    padding: 10,
    flex: 1,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderRadius: 25,
    borderColor: "#ccc",
  },
  displayStyle: {
    fontSize: 18,
  },
});

export default ButtonLinks;
