import { Stack } from "expo-router";
import { colors } from "../styles/Themes";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        contentStyle: { backgroundColor: colors.background },
        headerStyle: { backgroundColor: colors.surface },
        headerTintColor: colors.text,
      }}
    />
  );
}
