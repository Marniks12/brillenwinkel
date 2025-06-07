import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

const BlogCard = ({ name, intro, image, onPress }) => (
  <View style={styles.card}>
    {image && <Image source={image} style={styles.image} />}
    <Text style={styles.title}>{name}</Text>
    <Text style={styles.intro} numberOfLines={3}>{intro}</Text>

    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>Lees verder</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 180,
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  intro: {
    fontSize: 14,
    color: "#555",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
});

export default BlogCard;
