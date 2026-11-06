import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import type { FilmEntity } from "@/types";

type FilmCardProps = {
  film: FilmEntity;
};

export default function FilmCard({ film }: FilmCardProps) {
  return (
    <Pressable
      onPress={() => console.log("Open", film.id)}
      style={({ pressed }) => [styles.card, pressed && styles.pressed]}
    >
      <h1>{film.title}</h1>
      <p>{film.description}</p>
    </Pressable>
  );
}
const styles = StyleSheet.create({
  card: { borderRadius: 12, overflow: "hidden", backgroundColor: "#E6EEF7" },
  pressed: { opacity: 0.6 },
});
