import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ProductCard({
  title,
  description,
  price,
  image,
  onPress,
  isDarkMode,
}) {
  const cardBackground = isDarkMode ? "#1f2937" : "#fff";
  const titleColor = isDarkMode ? "#fff" : "#1f2937";
  const descColor = isDarkMode ? "#d1d5db" : "#6b7280";

  return (
    <View style={[styles.card, { backgroundColor: cardBackground }]}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.description, { color: descColor }]}>
        {description}
      </Text>
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
    borderRadius: 18,
    padding: 14,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 14,
    resizeMode: "cover",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 14,
  },
  description: {
    fontSize: 14,
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