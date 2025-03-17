import React, {useEffect, useState} from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import ProductCard from "../componten/productcard"; // Import je custom component

const homescreen = ({navigation}) => {
  const[products, setProducts] = useState ([]);

  useEffect(() => {
    fetch( "https://api.webflow.com/v2/sites/67b368ff73756cc0126255c9/products",
      {
        headers: {
          Authorization:
          "Bearer acb2890e704e5fb5ce75e612fa85f6fab1c38892fafa67d4ed3d3b49938075a4",
        },
      }
    )


    .then((res)=>res.json())
    .then((data)=>
      setProducts(
        data.items.map((item) => ({
        id: item.product.id,
        title: item.product.fieldData.name,
        subtitle: item.product.fieldData.description,
        price: (item.skus[0]?.fieldData.price.value || 0) / 100,
        image: {url: item.skus[0]?.fieldData["main-image"]?.url},
        }))
      )
  )
  .catch((err) => console.error("Error", err));

  }, []);
  
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>WelkomS!</Text>
     
      
    {products.map((product) => (

      <ProductCard
       key = {product.id}
       title = {product.title}
       subtitle = {product.subtitle}
       price = {product.price}
       image ={product.image}
       onPress={() => navigation.navigate("detail",product)}



     />
    ))}
   
     
    </ScrollView>
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

export default homescreen;

