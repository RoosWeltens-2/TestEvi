import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function BlogCard({ title, description, image, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lees blog</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 300,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 14,
    marginVertical: 12,
  },
  image: {
    width: "100%",
    height: 170,
    borderRadius: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  description: {
    fontSize: 14,
    marginTop: 6,
  },
  button: {
    backgroundColor: "purple",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});