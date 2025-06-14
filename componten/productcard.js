import React from "react";
import { View, Text, Image, StyleSheet,TouchableOpacity } from "react-native";
import  {useNavigation} from "@react-navigation/native";
const ProductCard = ({ title,  price, image, onPress}) => {
 const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Image source={typeof image === "string" ? { uri: image } : image} style={styles.image} />
      
      <Text style={styles.price}>€{price}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>Bekijk product</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: "center",
    height: 270,
  },
  title: { fontSize: 16, fontWeight: "bold", marginTop: 20 },
  image: { width: 130, height: 65, borderRadius: 50, marginBottom: 10 },

  price: { fontSize: 16, fontWeight: "bold", color: "#000", marginTop: 10,  },
  button: {
    marginTop: 3,
    borderRadius: 8,
    overflow: "hidden",
  },
  buttonText: {
    backgroundColor: "#a2e2d7",
    color: "#000",
    paddingVertical: 8,
    paddingHorizontal: 20,
    fontWeight: "semi-bold",
    textAlign: "center",
    borderRadius: 8,
  },
});

export default ProductCard;

