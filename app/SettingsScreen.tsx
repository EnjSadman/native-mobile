import { MainNav } from "@/components/Navigation/MainNav";
import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const SettingsScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings View</Text>
      <MainNav />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: { fontSize: 24, marginBottom: 20 },
});

export default SettingsScreen;
