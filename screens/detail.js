import React, {useState} from "react";
import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity} from "react-native";

const detail = ({route}) => {
  const {title, subtitle, price}= route.params;
  const[quantity, setQuantity] = useState(1);

  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity >1) {
      setQuantity(quantity -1);
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

      <Text style={styles.totalPrice}>Totaal: €{parseFloat(price) * quantity}</Text>

</View>
</View>

  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" , marginT  : 505 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5, marginTop: 70 },
  banner: { width: "100%", height: 200, borderRadius: 10 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 }
  ,
  button: {
    marginTop: 20,
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  }
});

export default detail;