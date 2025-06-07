import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import ProductCard from "../componten/productcard";
import { Picker } from "@react-native-picker/picker";

const categoryNames = {
  "": "Alle categorieën",
  "67b368ff73756cc012625720": "contactlenzen",
  "67b368ff73756cc012625722": "Brillen",
  "67b368ff73756cc012625721": "zonnebrillen",
};

const Products = ({ navigation, wishlistItems, setWishlistItems }) => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("price-asc");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/sites/67b368ff73756cc0126255c9/products", {
      headers: {
        Authorization:
          "Bearer acb2890e704e5fb5ce75e612fa85f6fab1c38892fafa67d4ed3d3b49938075a4",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setProducts(
          data.items.map((item) => ({
            id: item.product.id,
            title: item.product.fieldData.name,
            subtitle: item.product.fieldData.description,
            price: (item.skus[0]?.fieldData.price.value || 0) / 100,
            image: { uri: item.skus[0]?.fieldData["image"]?.url },
            category: categoryNames[item.product.fieldData.category[0]] || "Onbekend",
          }))
        )
      )
      .catch((err) => console.error("Error", err));
  }, []);

  const filteredProducts = products.filter(
    (p) =>
      (selectedCategory === "" || p.category === selectedCategory) &&
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortOption === "price-asc") return a.price - b.price;
    if (sortOption === "price-desc") return b.price - a.price;
    if (sortOption === "name-asc") return a.title.localeCompare(b.title);
    if (sortOption === "name-desc") return b.title.localeCompare(a.title);
  });

  const handleAddToWishlist = (product) => {
    // Controleer of het product al in de wishlist staat
    const existingItem = wishlistItems.find((item) => item.id === product.id);
    if (!existingItem) {
      setWishlistItems([...wishlistItems, product]);
    } else {
      alert("Dit product staat al in je wishlist!");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Onze modellen</Text>

      <TextInput
        style={styles.searchInput}
        placeholder="Zoek een model..."
        placeholderTextColor="#999"
        value={searchQuery}
        onChangeText={setSearchQuery}
      />

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={selectedCategory}
          onValueChange={setSelectedCategory}
          style={styles.picker}
        >
          <Picker.Item label="Alle categorieën" value="" />
          {[...new Set(products.map((p) => p.category))].map((category) => (
            <Picker.Item key={category} label={category} value={category} />
          ))}
        </Picker>
      </View>

      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={sortOption}
          onValueChange={setSortOption}
          style={styles.picker}
        >
          <Picker.Item label="Prijs (laag-hoog)" value="price-asc" />
          <Picker.Item label="Prijs (hoog-laag)" value="price-desc" />
          <Picker.Item label="Naam (A-Z)" value="name-asc" />
          <Picker.Item label="Naam (Z-A)" value="name-desc" />
        </Picker>
      </View>

      <View style={styles.row}>
        {SortedProducts.map((product) => (
          <View key={product.id} style={styles.productContainer}>
            <ProductCard
              title={product.title}
              subtitle={product.subtitle}
              price={product.price}
              img={product.image}
              onPress={() => navigation.navigate("productsdetail", product)}
            />
            <TouchableOpacity
             
            >
              <Text style={styles.buttonText}>Toevoegen aan wishlist</Text>
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#E6F0FF" },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  searchInput: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 10,
    fontSize: 16,
    marginBottom: 10,
    color: "#000",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  pickerContainer: {
    backgroundColor: "#E6F0FF",
    borderRadius: 10,
    width: 330,
    paddingHorizontal: 24,
    alignSelf: "center",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  productContainer: {
    marginBottom: 20,
    width: "45%",
    marginHorizontal: "2.5%",
  },
  addToWishlistButton: {
    backgroundColor: "#0000FF",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
  },
});

export default Products;
