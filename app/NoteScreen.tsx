import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const NoteScreen = ({ navigation }) => {
  return <View style={styles.container}>This is container for notes</View>;
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default NoteScreen;
