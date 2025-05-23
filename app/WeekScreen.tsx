import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const WeekScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Day View</Text>
      <Button
        title="Go to Month View"
        onPress={() => navigation.navigate("Month")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  title: { fontSize: 24, marginBottom: 20 },
});

export default WeekScreen;
