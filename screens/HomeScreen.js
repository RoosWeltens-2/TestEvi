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
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";

const PRODUCTS_URL =
  "https://api.webflow.com/v2/sites/698c7fd7b34b864abf927c87/products";
const BLOGS_URL =
  "https://api.webflow.com/v2/collections/699ef90c916e079961b253ce/items";

const PRODUCTS_TOKEN =
  "9b2beea7d061d75b1e4caa89bff49d5003753fb9c8b5ef083ec97c322fe21ec8";
const BLOGS_TOKEN =
  "f961edbb1c3aac68c299d7578f1cabd88d029200d44a81b9c877c7811316da7e";

const categoryNames = {
  "": "Alle categorieën",
  "69b0b2d99dbc0e80a8ccf523": "Lifestyle Posters",
  "69b0b1844338206b8691e882": "Dog",
  "69b0b1479e052dd4873c79bb": "Natuur",
  "69b0b11a489e91f4da52b006": "Retro",
  "69b0b0e8b3076b61544ac0db": "Abstract",
  "69b08dfb8f67766aaa2daba1": "Decoratie tips",
  "69b08de72491cd9f6c81465a": "Posters",
  "69b08dd3958cfed32f7d279b": "Interieur",
  "699f1862a9776976efff9a8e": "Blogs",
  "699efbabf676b77ac6dc7783": "Posters",
};

const HomeScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const [products, setProducts] = useState([]);
  const [blogs, setBlogs] = useState([]);

  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch(PRODUCTS_URL, {
      headers: {
        Authorization: `Bearer ${PRODUCTS_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mappedProducts = (data.items || []).map((item) => {
          const categoryIds = item.product?.fieldData?.category || [];

          return {
            id: item.product?.id,
            title: item.product?.fieldData?.name || "",
            description: item.product?.fieldData?.description || "",
            price: (item.skus?.[0]?.fieldData?.price?.value || 0) / 100,
            image: {
              uri: item.skus?.[0]?.fieldData?.["main-image"]?.url || "",
            },
            categoryIds: Array.isArray(categoryIds)
              ? categoryIds
              : [categoryIds],
          };
        });

        setProducts(mappedProducts);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  useEffect(() => {
    fetch(BLOGS_URL, {
      headers: {
        Authorization: `Bearer ${BLOGS_TOKEN}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        const mappedBlogs = (data.items || []).map((item) => {
          const fieldData = item.fieldData || {};

          const rawCategories =
            fieldData.category ||
            fieldData.categories ||
            fieldData["blog-category"] ||
            [];

          return {
            id: item.id,
            title: fieldData.name || "",
            description:
              fieldData.description ||
              fieldData["short-description"] ||
              fieldData.summary ||
              "",
            image: {
              uri:
                fieldData["main-image"]?.url ||
                fieldData.image?.url ||
                fieldData.thumbnail?.url ||
                "",
            },
            categoryIds: Array.isArray(rawCategories)
              ? rawCategories
              : rawCategories
              ? [rawCategories]
              : [],
          };
        });

        setBlogs(mappedBlogs);
      })
      .catch((error) => console.error("Error fetching blogs:", error));
  }, []);

  const filteredProducts = products.filter((p) => {
    const matchesCategory =
      selectedCategory === "" || p.categoryIds.includes(selectedCategory);

    const matchesSearch = p.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
    return 0;
  });

  const filteredBlogs = blogs.filter((b) => {
    const matchesSearch = b.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());

    return matchesSearch;
  });

  const backgroundColor = isEnabled ? "#111827" : "#f5f5f5";
  const cardColor = isEnabled ? "#1f2937" : "#ffffff";
  const textColor = isEnabled ? "#ffffff" : "#222222";
  const subTextColor = isEnabled ? "#d1d5db" : "#555555";
  const inputTextColor = isEnabled ? "#ffffff" : "#222222";
  const borderColor = isEnabled ? "#374151" : "#cccccc";

  return (
    <ScrollView
      contentContainerStyle={[styles.container, { backgroundColor }]}
    >
      <Text style={[styles.heading, { color: textColor }]}>Halloo</Text>

      <Text style={[styles.subText, { color: subTextColor }]}>
        Dit is mijn product- en blogoverzicht met componenten in React Native.
      </Text>

      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: cardColor,
            color: inputTextColor,
            borderColor: borderColor,
          },
        ]}
        placeholder="Zoek een product of blog..."
        placeholderTextColor={isEnabled ? "#9ca3af" : "#6b7280"}
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View
        style={[
          styles.switchContainer,
          {
            backgroundColor: cardColor,
          },
        ]}
      >
        <Text style={[styles.switchText, { color: textColor }]}>
          Donkere modus
        </Text>
        <Switch
          value={isEnabled}
          onValueChange={() => setIsEnabled(!isEnabled)}
          trackColor={{ false: "#767577", true: "#60a5fa" }}
          thumbColor={isEnabled ? "#2563eb" : "#f4f3f4"}
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

      <Text style={[styles.filterLabel, { color: textColor }]}>
        Filter op categorie
      </Text>

      <View
        style={[
          styles.pickerWrapper,
          {
            backgroundColor: cardColor,
            borderColor: borderColor,
          },
        ]}
      >
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={{ width: "100%", color: textColor }}
        >
          {Object.entries(categoryNames).map(([id, name]) => (
            <Picker.Item key={id} label={name} value={id} />
          ))}
        </Picker>
      </View>

      <Text style={[styles.filterLabel, { color: textColor }]}>
        Sorteer producten
      </Text>

      <View
        style={[
          styles.pickerWrapper,
          {
            backgroundColor: cardColor,
            borderColor: borderColor,
          },
        ]}
      >
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={{ width: "100%", color: textColor }}
        >
          <Picker.Item label="Prijs oplopend" value="price-asc" />
          <Picker.Item label="Prijs aflopend" value="price-desc" />
          <Picker.Item label="Naam A-Z" value="name-asc" />
          <Picker.Item label="Naam Z-A" value="name-desc" />
        </Picker>
      </View>

      <Text style={[styles.sectionTitle, { color: textColor }]}>
        Mijn producten
      </Text>

      {sortedProducts.map((product) => (
        <ProductCard
          key={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
          isDarkMode={isEnabled}
          onPress={() =>
            navigation.navigate("Details", {
              type: "product",
              isDarkMode: isEnabled,
              ...product,
            })
          }
        />
      ))}

      <Text style={[styles.sectionTitle, { color: textColor }]}>Blogs</Text>

      {filteredBlogs.map((blog) => (
        <BlogCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          isDarkMode={isEnabled}
          onPress={() =>
            navigation.navigate("Details", {
              type: "blog",
              isDarkMode: isEnabled,
              ...blog,
            })
          }
        />
      ))}

      <StatusBar style={isEnabled ? "light" : "dark"} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    paddingTop: 60,
    minHeight: "100%",
  },
  heading: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  switchContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    borderRadius: 10,
    marginBottom: 20,
  },
  switchText: {
    fontSize: 16,
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
  filterLabel: {
    width: "100%",
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 8,
  },
  pickerWrapper: {
    width: "100%",
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 20,
    overflow: "hidden",
  },
  sectionTitle: {
    width: "100%",
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 10,
  },
});

export default HomeScreen;