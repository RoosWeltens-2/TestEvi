import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function ProductCard({
  title,
  description,
  price,
  image,
  onPress,
  isDarkMode,
}) {
  const cardBackground = isDarkMode ? "#2a2421" : "#ffffff";
  const titleColor = isDarkMode ? "#ffffff" : "#000000";
  const descColor = isDarkMode ? "#d6d0cb" : "#555555";

  return (
    <View style={[styles.card, { backgroundColor: cardBackground }]}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.description, { color: descColor }]} numberOfLines={3}>
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
    width: "100%",
    borderRadius: 20,
    padding: 16,
    marginVertical: 12,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 220,
    borderRadius: 16,
    resizeMode: "cover",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 14,
  },
  description: {
    fontSize: 14,
    marginTop: 8,
    marginBottom: 10,
    lineHeight: 20,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#dd9d4c",
    marginBottom: 14,
  },
  button: {
    backgroundColor: "#dd9d4c",
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: "center",
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 15,
  },
});