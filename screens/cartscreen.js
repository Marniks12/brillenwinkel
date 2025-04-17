import React, { useState } from "react";
import { View, Text, ScrollView, Image, Button, StyleSheet, TouchableOpacity } from "react-native";

const CartScreen = ({ cartItems, setCartItems }) => {


  const getTotalPrice = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  const updateQuantity = (id, change) => {
    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, item.quantity + change) }
        : item
    );
    setCartItems(updatedCart);
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Winkelmandje</Text>

      {cartItems.length === 0 ? (
        <Text style={styles.emptyText}>Je mandje is leeg</Text>
      ) : (
        cartItems.map((item) => (
          <View key={item.id} style={styles.item}>
            <Image source={item.image} style={styles.image} />
            <View style={styles.details}>
              <Text style={styles.title}>{item.title}</Text>
              <Text>€{item.price.toFixed(2)}</Text>
              <View style={styles.quantity}>
                <TouchableOpacity onPress={() => updateQuantity(item.id, -1)}>
                  <Text style={styles.button}>-</Text>
                </TouchableOpacity>
                <Text style={styles.qText}>{item.quantity}</Text>
                <TouchableOpacity onPress={() => updateQuantity(item.id, 1)}>
                  <Text style={styles.button}>+</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))
      )}

      <Text style={styles.total}>Totaal: €{getTotalPrice().toFixed(2)}</Text>
      <Button title="Afrekenen" onPress={() => alert("Checkout coming soon!")} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  heading: { fontSize: 24, fontWeight: "bold", marginBottom: 20, textAlign: "center" },
  emptyText: { textAlign: "center", color: "#999", marginTop: 40 },
  item: { flexDirection: "row", marginBottom: 15, alignItems: "center" },
  image: { width: 70, height: 70, marginRight: 10, borderRadius: 10 },
  details: { flex: 1 },
  title: { fontSize: 16, fontWeight: "bold" },
  quantity: { flexDirection: "row", alignItems: "center", marginTop: 5 },
  qText: { marginHorizontal: 10 },
  button: {
    fontSize: 18,
    paddingHorizontal: 10,
    paddingVertical: 2,
    backgroundColor: "#eee",
    borderRadius: 5,
  },
  total: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "right",
    marginVertical: 20,
  },
});

export default CartScreen;
