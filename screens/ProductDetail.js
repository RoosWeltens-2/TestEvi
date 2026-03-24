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
  const { type, title, description, price, image } = route.params;

  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
  
      {type === "product" && (
        <>
          <Text style={styles.price}>€{price}</Text>
  
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={decreaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>-</Text>
            </TouchableOpacity>
  
            <Text style={styles.quantityText}>{quantity}</Text>
  
            <TouchableOpacity onPress={increaseQuantity} style={styles.quantityButton}>
              <Text style={styles.quantityButtonText}>+</Text>
            </TouchableOpacity>
          </View>
  
          <Text style={styles.totalText}>Aantal producten: {quantity}</Text>
          <Text style={styles.totalPrice}>Totale prijs: €{price * quantity}</Text>
        </>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  image: {
    width: 300,
    height: 200,
    borderRadius: 12,
    marginBottom: 20,
    resizeMode: "cover",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: "#555",
    marginBottom: 10,
    textAlign: "center",
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 20,
  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
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
  },
  totalPrice: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#16a34a",
  },
});

export default ProductDetail;