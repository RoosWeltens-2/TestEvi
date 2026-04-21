import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

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

  const backgroundColor = isDarkMode ? "#111827" : "#ffffff";
  const cardColor = isDarkMode ? "#1f2937" : "#ffffff";
  const titleColor = isDarkMode ? "#ffffff" : "#111827";
  const textColor = isDarkMode ? "#d1d5db" : "#555555";
  const borderColor = isDarkMode ? "#374151" : "#e5e7eb";

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor }]}
    >
      <View
        style={[
          styles.contentCard,
          {
            backgroundColor: cardColor,
            borderColor: borderColor,
          },
        ]}
      >
        <Image source={image} style={styles.image} />

        <Text style={[styles.title, { color: titleColor }]}>{title}</Text>

        <Text style={[styles.description, { color: textColor }]}>
          {description}
        </Text>

        {type === "product" && (
          <>
            <Text style={styles.price}>€{Number(price).toFixed(2)}</Text>

            <View style={styles.quantityContainer}>
              <TouchableOpacity
                onPress={decreaseQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>-</Text>
              </TouchableOpacity>

              <Text style={[styles.quantityText, { color: titleColor }]}>
                {quantity}
              </Text>

              <TouchableOpacity
                onPress={increaseQuantity}
                style={styles.quantityButton}
              >
                <Text style={styles.quantityButtonText}>+</Text>
              </TouchableOpacity>
            </View>

            <Text style={[styles.totalText, { color: textColor }]}>
              Aantal producten: {quantity}
            </Text>

            <Text style={styles.totalPrice}>
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
    justifyContent: "center",
  },
  contentCard: {
    borderRadius: 18,
    padding: 20,
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: 240,
    borderRadius: 14,
    marginBottom: 20,
    resizeMode: "cover",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  price: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 20,
    textAlign: "center",
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  quantityButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  quantityButtonText: {
    color: "#fff",
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
    fontSize: 20,
    fontWeight: "bold",
    color: "#16a34a",
    textAlign: "center",
  },
});

export default ProductDetail;