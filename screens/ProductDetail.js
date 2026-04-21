import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const stripHtml = (html) => {
  if (!html) return "";
  return html
    .replace(/<\/h2>/g, "\n\n")
    .replace(/<\/p>/g, "\n\n")
    .replace(/<br\s*\/?>/g, "\n")
    .replace(/<[^>]*>/g, "")
    .replace(/&nbsp;/g, " ")
    .trim();
};

const ProductDetail = ({ route }) => {
  const {
    type,
    title,
    description,
    price = 0,
    image,
    isDarkMode = false,
  } = route.params;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) =>
      prevQuantity > 1 ? prevQuantity - 1 : 1
    );
  };

  const totalPrice = price * quantity;

  const theme = isDarkMode
    ? {
        background: "#1f1a17",
        card: "#2a2421",
        text: "#ffffff",
        subText: "#d6d0cb",
        border: "#4b443f",
        primary: "#dd9d4c",
      }
    : {
        background: "#f6f1ed",
        card: "#ffffff",
        text: "#000000",
        subText: "#555555",
        border: "#e6ddd6",
        primary: "#dd9d4c",
      };

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: theme.background },
      ]}
    >
      <View
        style={[
          styles.contentCard,
          {
            backgroundColor: theme.card,
            borderColor: theme.border,
          },
        ]}
      >
        <Image source={image} style={styles.image} />

        <Text style={[styles.title, { color: theme.text }]}>{title}</Text>

        <Text style={[styles.description, { color: theme.subText }]}>
          {type === "blog" ? stripHtml(description) : description}
        </Text>

        {type === "product" && (
          <>
            <Text style={[styles.price, { color: theme.primary }]}>
              €{Number(price).toFixed(2)}
            </Text>

            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={[styles.quantityButton, { backgroundColor: theme.primary }]}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={[styles.quantityText, { color: theme.text }]}>
                {quantity}
              </Text>

              <TouchableOpacity
                onPress={increaseQuantity}
                style={[styles.quantityButton, { backgroundColor: theme.primary }]}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.totalText, { color: theme.subText }]}>
              Aantal producten: {quantity}
            </Text>

            <Text style={[styles.totalPrice, { color: theme.primary }]}>
              Totale prijs: €{totalPrice.toFixed(2)}
            </Text>
          </>
        )}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  contentCard: {
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    shadowColor: "#000",
    shadowOpacity: 0.06,
    shadowRadius: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 260,
    borderRadius: 16,
    marginBottom: 20,
    resizeMode: "cover",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 18,
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  quantityButton: {
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 12,
  },
  quantityButtonText: {
    color: "#ffffff",
    fontSize: 22,
    fontWeight: "bold",
  },
  quantityText: {
    fontSize: 22,
    marginHorizontal: 20,
    fontWeight: "bold",
  },
  totalText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: "center",
  },
  totalPrice: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default ProductDetail;