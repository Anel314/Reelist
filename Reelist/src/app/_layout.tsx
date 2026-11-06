import { Stack } from "expo-router";
import { colors } from "../styles/Themes";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.surface,
        },
        headerTintColor: colors.text,
        contentStyle: {
          backgroundColor: colors.background,
        },
        headerTitleStyle: {
          fontWeight: "600",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          title: "Home",
        }}
      />

      <Stack.Screen
        name="discover"
        options={{
          title: "discover",
        }}
      />

      <Stack.Screen
        name="search"
        options={{
          title: "search",
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          title: "profile",
        }}
      />
    </Stack>
  );
}
