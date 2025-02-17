import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const ProductCard = ({ name, description, image }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f8f8f8",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
  },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 16, fontWeight: "bold" },
  description: { fontSize: 14, color: "#555", textAlign: "center" }
});

export default ProductCard;
