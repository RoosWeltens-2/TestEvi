import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function BlogCard({
  title,
  description,
  image,
  onPress,
  isDarkMode,
}) {
  const cardBackground = isDarkMode ? "#1f2937" : "#fff";
  const titleColor = isDarkMode ? "#fff" : "#000";
  const descColor = isDarkMode ? "#d1d5db" : "#333";

  return (
    <View style={[styles.card, { backgroundColor: cardBackground }]}>
      <Image source={image} style={styles.image} />
      <Text style={[styles.title, { color: titleColor }]}>{title}</Text>
      <Text style={[styles.description, { color: descColor }]}>
        {description}
      </Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Lees blog</Text>
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