import { StyleSheet, Text, View, Image } from "react-native";

export default function ProductCard() {
  return (
    <View style={styles.card}>
    <Image
    source={require("../images/paard.webp")}
    style={styles.image}
    />
      <Text style={styles.title}>Mooi paardje</Text>
      <Text style={styles.description}>Pure PK</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 280,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 12,
    marginVertical: 14,
  },
  image: {
    width: "100%",
    height: 130,
    borderRadius: 10,
    resizeMode: "cover",
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginTop: 12,
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: "gray",
  },
});