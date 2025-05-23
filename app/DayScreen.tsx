import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const DayScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day View</Text>
      <Text>Day Screen</Text>
      <Button
        title="Go to Week View"
        onPress={() => navigation.navigate("Week")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default DayScreen;
