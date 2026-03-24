import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  Pressable,
  Button,
  Switch,
  Alert,
} from "react-native";


const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.heading}>Halloop</Text>
      <Text style={styles.subText}>
        Dit is mijn productoverzicht met componenten in React Native.
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Zoek een product..."
        value={searchText}
        onChangeText={setSearchText}
      />

      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Donkere modus</Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
        />
      </View>

      <Pressable
        style={styles.pressableButton}
        onPress={() => Alert.alert("Klik!", "Je hebt op Pressable gedrukt")}
      >
        <Text style={styles.pressableText}>Klik hier</Text>
      </Pressable>

      <View style={styles.buttonContainer}>
        <Button
          title="Meer info"
          onPress={() => Alert.alert("Info", "Hier komt later meer info")}
        />
      </View>

      <Text style={styles.sectionTitle}>Mijn producten</Text>

      <ProductCard
  title="Paard"
  description="Elegant en sierlijk"
  price={4500}
  image={require("../images/paard.webp")}
  onPress={() =>
    navigation.navigate("Details", {
      type: "product",
      title: "Paard",
      description: "Elegant en sierlijk",
      price: 4500,
      image: require("../images/paard.webp"),
    })
  }
/>

      <ProductCard
        title="Zadel"
        description="Comfortabel en stevig"
        price={300}
        image={require("../images/zadel.jpg")}
        onPress={() =>
          navigation.navigate("Details", {
            type: "product",
            title: "Zadel",
            description: "Comfortabel en stevig",
            price: 300,
            image: require("../images/zadel.jpg"),
          })
        }
      />

<Text style={styles.sectionTitle}>Blogs</Text>

<BlogCard
  title="Hoe verzorg je een paard?"
  description="Tips voor dagelijkse verzorging."
  image={require("../images/paard.webp")}
  onPress={() =>
    navigation.navigate("Details", {
      type: "blog",
      title: "Hoe verzorg je een paard?",
      description: "Tips voor dagelijkse verzorging.",
      image: require("../images/paard.webp"),
    })
  }
/>

<BlogCard
  title="Waarom een goed zadel belangrijk is"
  description="Comfort en veiligheid voor ruiter en paard."
  image={require("../images/paard.webp")}
  onPress={() =>
    navigation.navigate("Details", {
      type: "blog",
      title: "Waarom een goed zadel belangrijk is",
      description: "Comfort en veiligheid voor ruiter en paard.",
      image: require("../images/paard.webp"),
    })
  }
/>

      <StatusBar style="auto" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#f5f5f5",
    alignItems: "center",
    paddingTop: 60,
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
    color: "#555",
  },
  input: {
    width: "100%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  switchText: {
    fontSize: 16,
    color: "#333",
  },
  pressableButton: {
    backgroundColor: "#3b82f6",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  pressableText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonContainer: {
    width: "100%",
    marginBottom: 25,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#222",
    alignSelf: "flex-start",
  },
});

export default HomeScreen;