import { Text, View, StyleSheet } from "react-native";

import Button from "@/components/ui/Button";
export default function Index() {
  return (
    <View style={styles.container}>
      <Button
        title="Add to watchlist"
        variant="confirm"
        size="lg"
        onPress={() => {}}
      />
      <Button title="Remove film" variant="ghost" onPress={() => {}} />
      <Button title="Save changes" loading={false} onPress={() => {}} />
      <Button title="Cancel" variant="secondary" onPress={() => {}} />
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
