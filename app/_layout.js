import { Tabs } from "expo-router";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";

export default function AppLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#630c13", 
        tabBarInactiveTintColor: "#fb6e79", 
        tabBarStyle: { backgroundColor: "#9ff7ef" },
        headerStyle: { backgroundColor: "#9ff7ef" },
        headerTintColor: "#630c13", 
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <AntDesign name="home" color={color} size={size} />
          ),
        }}
      />
      <Tabs.Screen
        name="categories"
        options={{
          title: "Categories",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="grid-outline" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}
