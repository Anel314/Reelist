import { View, StyleSheet } from "react-native";
import { router } from "expo-router";

import Button from "@/components/ui/Button";

export default function Index() {
  return (
    <View style={styles.container}>
      <Button title="Go to Profile" onPress={() => router.push("/discover")} />
      <Button title="Go to Profile" onPress={() => router.push("/search")} />
      <Button title="Go to Profile" onPress={() => router.push("/profile")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
