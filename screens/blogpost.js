import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
} from "react-native";
import { Picker } from "@react-native-picker/picker"; // <-- Zorg dat je dit installeert!
import BlogCard from "../componten/blogcard";

const BlogPost = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("az");

  useEffect(() => {
    fetch("https://api.webflow.com/v2/collections/67b368ff73756cc0126256a7/items", {
      headers: {
        Authorization:
          "Bearer acb2890e704e5fb5ce75e612fa85f6fab1c38892fafa67d4ed3d3b49938075a4",
        "accept-version": "1.0.0",
      },
    })
      .then((res) => res.json())
      .then((data) =>
        setBlogs(
          data.items.map((item) => ({
            id: item._id,
            name: item.fieldData.name,
            postbody: item.fieldData["post-body"],
            mainimage: item.fieldData["main-image"]?.url
              ? { uri: item.fieldData["main-image"].url }
              : null,
            thumb: item.fieldData["thumbnail-image"]?.url
              ? { uri: item.fieldData["thumbnail-image"].url }
              : null,
            summary: item.fieldData["post-summary"],
          }))
        )
      )
      .catch((err) => console.error("Blog fetch error:", err));
  }, []);

  // Filter en sorteer
  const filteredAndSortedBlogs = blogs
    .filter((blog) =>
      blog.name.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .sort((a, b) => {
      if (sortOption === "az") return a.name.localeCompare(b.name);
      if (sortOption === "za") return b.name.localeCompare(a.name);
      return 0;
    });

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>Blog Posts</Text>

      <TextInput
        placeholder="Zoek op titel..."
        value={searchQuery}
        onChangeText={setSearchQuery}
        style={styles.input}
      />

      <Text style={styles.label}>Sorteer op titel:</Text>
      <Picker
        selectedValue={sortOption}
        onValueChange={(value) => setSortOption(value)}
        style={styles.picker}
      >
        <Picker.Item label="A-Z" value="az" />
        <Picker.Item label="Z-A" value="za" />
      </Picker>

      <View style={styles.row}>
        {filteredAndSortedBlogs.map((blog) => (
          <BlogCard
            key={blog.id}
            name={blog.name}
            intro={blog.summary}
            image={blog.mainimage}
            onPress={() => navigation.navigate("blogpostdetail", blog)}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" },
  heading: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    marginTop: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  picker: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 15,
  },
  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});

export default BlogPost;
