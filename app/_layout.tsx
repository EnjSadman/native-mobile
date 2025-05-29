import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  // NavigationContainer, // Not typically used directly with expo-router
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router"; // This Stack is from expo-router
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";
// import DayScreen from "./screens/DayScreen"; // Not imported this way with expo-router

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(tabs)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      {/* With expo-router, NavigationContainer is handled internally by the Stack */}
      <Stack initialRouteName="SettingsScreen">
        {/*
          In expo-router, you don't define screens using 'component'.
          Instead, you create files in your 'app' directory, and expo-router
          automatically creates routes for them.

          For example, if you want a "day screen", you would create a file
          like 'app/day.tsx' or 'app/screens/day.tsx' (if you map your
          screens directory in metro.config.js for expo-router).

          If 'DayScreen' is indeed meant to be a standalone screen, ensure
          it resides in your `app` directory (e.g., `app/day.tsx` or `app/screens/day.tsx`).
          The name prop here should then match the file name (without extension).
        */}
        {/* Assuming you have a file like `app/day.tsx` or `app/screens/day.tsx` */}
      </Stack>
    </ThemeProvider>
  );
}
