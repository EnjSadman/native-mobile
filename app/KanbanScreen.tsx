import { MainNav } from "@/components/Navigation/MainNav";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kanban View</Text>
      <MainNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default SettingsScreen;
