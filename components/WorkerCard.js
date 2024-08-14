import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function WorkerCard({ name, country, profileImage, flag }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: profileImage }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.country}>{country}</Text>

      <Image source={{ uri: flag }} style={styles.flag} />
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ccfbf6",
    borderRadius: 8,
    padding: 10,
    margin: 3,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#630c13",
  },
  country: {
    fontSize: 14,
    color: "#630c13",
  },

  flag: {
    width: 20,
    height: 20,
  },
});
