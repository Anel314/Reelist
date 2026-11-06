import { Text, View, StyleSheet } from "react-native";
import { Films } from "../data/films";
import FilmCard from "../components/FilmCard";

export default function Index() {
  return (
    <View style={styles.container}>
      {Films.map((film) => (
        <FilmCard key={film.id} film={film} />
      ))}
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
