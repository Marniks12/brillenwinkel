import React from "react";
import { View, Text, Image, ScrollView, StyleSheet, useWindowDimensions } from "react-native";
import RenderHtml from "react-native-render-html";

const BlogPostDetail = ({ route }) => {
  const { name, thumb, postbody } = route.params;
  const { width } = useWindowDimensions();

  return (
    <ScrollView style={styles.container}>
      {thumb && <Image source={thumb} style={styles.image} />}
      <Text style={styles.title}>{name}</Text>
      <RenderHtml
        contentWidth={width}
        source={{ html: `<div>${postbody}</div>` }}
        baseStyle={styles.body}
      />
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
    fontSize: 16,
    color: "#333",
    lineHeight: 24,
    textAlign: "left",
  },
});

export default BlogPostDetail;
