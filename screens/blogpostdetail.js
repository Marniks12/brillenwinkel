import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";

const BlogPostDetail = ({ route }) => {
  const { name, image, postbody } = route.params;

  return (
    <ScrollView style={styles.container}>
      {image && <Image source={image} style={styles.image} />}
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.body}>{postbody}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  body: {
    fontSize: 36,
    color: "#333",
    lineHeight: 24,
    textAlign: "left",
  },
});

export default BlogPostDetail;
