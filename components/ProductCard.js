import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ProductCard({ title, description, price, image, onPress }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Text style={styles.price}>€{price}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk details</Text>
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
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: 250,
    height: 250,
    borderRadius: 14,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 14,
    color: "#1f2937",
  },
  description: {
    fontSize: 14,
    color: "#6b7280",
    marginTop: 6,
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#2563eb",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#2563eb",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 15,
  },
});