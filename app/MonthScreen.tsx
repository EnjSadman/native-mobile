import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { Calendar } from "react-native-calendars";

const MonthScreen = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Month View</Text>
      <Calendar
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          console.log("selected day", day);
        }}
        markedDates={{
          [selectedDate]: {
            selected: true,
            marked: true,
            selectedColor: "blue",
          },
        }}
      />
      <Button
        title="Go to Notes"
        onPress={() => navigation.navigate("Notes")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 50 },
  title: { fontSize: 24, textAlign: "center", marginBottom: 20 },
});

export default MonthScreen;
