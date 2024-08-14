import React, { useState } from "react";
import { View, TextInput, StyleSheet, ScrollView } from "react-native";
import CategoryIcon from "./CategoryIcon";
import categories from "../data/categories.json";

export default function Header({ onSearch, onCategorySelect }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    onSearch(text);
  };

  return (
    <View style={styles.header}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search workers..."
        value={searchText}
        onChangeText={handleSearch}
      />
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.iconScroll}
      >
        {categories.map((category) => (
          <CategoryIcon
            key={category.id}
            name={category.name}
            icon={category.icon}
            onPress={() => onCategorySelect(category.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
  },
  searchBar: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 10,
  },
  iconScroll: {
    flexDirection: "row",
  },
});
