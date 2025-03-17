import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import  {useNavigation} from "@react-navigation/native";
const ProductCard = ({ title, subtitle, price, image, onPress}) => {
 const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{subtitle}</Text>
      <Text style={styles.price}>€{price}</Text>


       <TouchableOpacity style={styles.button} onPress={onPress}>
              <Text style={styles.buttonText}>Bekijk product</Text>
            </TouchableOpacity>
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
  title: { fontSize: 16, fontWeight: "bold" },
  description: { fontSize: 14, color: "#555", textAlign: "center" }
});

export default ProductCard;

