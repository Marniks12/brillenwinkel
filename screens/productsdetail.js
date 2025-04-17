import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";  

const ProductsDetail = ({ route, cartItems, setCartItems, wishlistItems, setWishlistItems }) => {
  const { id, title, subtitle, price, image } = route.params;
  const [quantity, setQuantity] = useState(1);
  const navigation = useNavigation();  

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      const updatedCart = cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + quantity }
          : item
      );
      setCartItems(updatedCart);
    } else {
      setCartItems([
        ...cartItems,
        { id, title, price, image, quantity },
      ]);
    }

    // Correct route name with lowercase 'cartscreen'
    navigation.navigate("cartscreen");
  };

  const handleAddToWishlist = () => {
    const existingItem = wishlistItems.find((item) => item.id === id);
    
    // Voeg alleen toe als het product nog niet in de wishlist zit
    if (!existingItem) {
      setWishlistItems([...wishlistItems, { id, title, price, image }]);
    } else {
      alert("Dit product staat al in je wishlist!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Text style={styles.price}>€{price}</Text>

      <View style={styles.quantityContainer}>
        <TouchableOpacity style={styles.button} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.quantityText}>{quantity}</Text>
        <TouchableOpacity style={styles.button} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      {/* Display live total price */}
      <Text style={styles.totalPrice}>
        Totaal: €{(price * quantity).toFixed(2)}
      </Text>

      {/* Voeg toe aan winkelmandje */}
      <TouchableOpacity style={styles.addToCartButton} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Toevoegen aan winkelmandje</Text>
      </TouchableOpacity>

      {/* Voeg toe aan wishlist */}
      <TouchableOpacity style={styles.addToWishlistButton} onPress={handleAddToWishlist}>
        <Text style={styles.buttonText}>Toevoegen aan wenslijst</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20 },
  title: { fontSize: 24, fontWeight: "bold" },
  subtitle: { fontSize: 16 },
  price: { fontSize: 18, marginVertical: 10 },
  quantityContainer: { flexDirection: "row", alignItems: "center", marginVertical: 20 },
  button: { backgroundColor: "#eee", padding: 10, marginHorizontal: 10 },
  buttonText: { fontSize: 18 },
  quantityText: { fontSize: 18 },
  addToCartButton: { backgroundColor: "#FF7F50", padding: 15, borderRadius: 10, alignItems: "center" },
  addToWishlistButton: { backgroundColor: "#FFD700", padding: 15, borderRadius: 10, alignItems: "center", marginTop: 10 },
  totalPrice: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
    color: "#333",
  },
});

export default ProductsDetail;
