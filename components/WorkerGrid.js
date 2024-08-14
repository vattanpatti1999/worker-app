import React from "react";
import { FlatList, StyleSheet, Dimensions } from "react-native";
import WorkerCard from "./WorkerCard";

const { width } = Dimensions.get("window");

export default function WorkerGrid({ workers }) {
  const renderItem = ({ item }) => (
    <WorkerCard
      name={item.name}
      country={item.country}
      profileImage={item.profileImage}
      style={styles.card}
    />
  );

  return (
    <FlatList
      data={workers}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      numColumns={4}
      contentContainerStyle={styles.grid}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    paddingHorizontal: 5,
    paddingTop: 10,
  },
  card: {
    width: (width - 40) / 3,
    marginHorizontal: 5,
    marginBottom: 10,
  },
});
