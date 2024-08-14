import React from "react";
import { TouchableOpacity, Image, Text, StyleSheet } from "react-native";

export default function CategoryIcon({ name, icon, onPress }) {
  return (
    <TouchableOpacity
      style={styles.iconContainer}
      onPress={() => onPress(name)}
    >
      <Image source={{ uri: icon }} style={styles.icon} />
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    alignItems: "center",
    marginRight: 15,
  },
  icon: {
    width: 60,
    height: 60,
    marginBottom: 5,
    marginTop: 10,
  },
  name: {
    fontSize: 12,
    color: "#630c13",
  },
});
