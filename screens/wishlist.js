import React from "react";
import { View, Text, TouchableOpacity, FlatList, StyleSheet } from "react-native";

const Wishlist = ({ wishlistItems, setWishlistItems }) => {
  const removeItem = (id) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>{item.title}</Text>
      <Text style={styles.itemPrice}>€{item.price}</Text>
      <TouchableOpacity style={styles.removeButton} onPress={() => removeItem(item.id)}>
        <Text style={styles.removeButtonText}>Verwijderen</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Wenslijst</Text>
      {wishlistItems.length === 0 ? (
        <Text style={styles.emptyMessage}>Je wishlist is leeg!</Text>
      ) : (
        <FlatList
          data={wishlistItems}
          renderItem={renderItem}
          keyExtractor={(item) => item.id.toString()}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  itemContainer: { flexDirection: "row", alignItems: "center", marginBottom: 15 },
  itemTitle: { fontSize: 18, flex: 1 },
  itemPrice: { fontSize: 16, color: "#555" },
  removeButton: {
    backgroundColor: "#FF6347",
    padding: 10,
    borderRadius: 5,
  },
  removeButtonText: { color: "white", fontSize: 16 },
  emptyMessage: { fontSize: 18, color: "#888" },
});

export default Wishlist;
