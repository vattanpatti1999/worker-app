import { View, Text, StyleSheet } from "react-native";

export default function Welcome() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9ff7ef",
  },
  text: {
    fontSize: 24,
    color: "#630c13",
  },
});
