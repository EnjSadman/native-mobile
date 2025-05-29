import { useRoute } from "@react-navigation/native";
import { useRouter } from "expo-router"; // Import useRouter
import { View, Text, Button, StyleSheet } from "react-native";

export const MainNav = () => {
  const router = useRouter();
  const route = useRoute();

  const currentRouteName = route.name;

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>This is navigation component.</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Go to Calendar screen"
          onPress={() => {
            if (currentRouteName !== "CalendarScreen") {
              router.push("/CalendarScreen");
            }
          }}
          disabled={currentRouteName === "CalendarScreen"}
          color={currentRouteName === "CalendarScreen" ? "gray" : "#007AFF"}
        />
        <Button
          title="Go to Kanban screen"
          onPress={() => {
            if (currentRouteName !== "KanbanScreen") {
              router.push("/KanbanScreen");
            }
          }}
          disabled={currentRouteName === "KanbanScreen"}
          color={currentRouteName === "KanbanScreen" ? "gray" : "#28A745"}
        />
        <Button
          title="Go to Settings screen"
          onPress={() => {
            if (currentRouteName !== "SettingsScreen") {
              router.push("/SettingsScreen");
            }
          }}
          disabled={currentRouteName === "SettingsScreen"}
          color={currentRouteName === "SettingsScreen" ? "gray" : "#FFC107"}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    borderTopWidth: 1,
    borderColor: "#ccc",
    backgroundColor: "#f8f8f8",
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 10,
  },
});
