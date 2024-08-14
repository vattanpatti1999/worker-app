import React, { useState, useCallback } from "react";
import { View, StyleSheet } from "react-native";
import Header from "../components/Header";
import WorkerGrid from "../components/WorkerGrid";
import workers from "../data/workers.json";

export default function Categories() {
  const [filteredWorkers, setFilteredWorkers] = useState(workers);

  const handleSearch = useCallback((searchText) => {
    const filtered = workers.filter(
      (worker) =>
        worker.name.toLowerCase().includes(searchText.toLowerCase()) ||
        worker.country.toLowerCase().includes(searchText.toLowerCase()) ||
        worker.category.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredWorkers(filtered);
  }, []);

  const handleCategorySelect = useCallback((category) => {
    const filtered = workers.filter((worker) => worker.category === category);
    setFilteredWorkers(filtered);
  }, []);

  return (
    <View style={styles.container}>
      <Header onSearch={handleSearch} onCategorySelect={handleCategorySelect} />
      <WorkerGrid workers={filteredWorkers} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9ff7ef",
  },
});
