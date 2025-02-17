import React from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import ProductCard from "./assets/productcard"; // Import je custom component

const App = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>WelkomS!</Text>
      <Image
        source={{ uri: "https://via.placeholder.com/300" }} // Vervang met een echte afbeelding
        style={styles.banner}
      />
      <Text style={styles.subtitle}>Onze collectie</Text>

      {/* Meerdere brillen weergeven */}
      <ProductCard 
        name="Zonnebril Classic"
        description="Een stijlvolle zonnebril voor elke gelegenheid."
        image="https://www.hansanders.be/dw/image/v2/BJBD_PRD/on/demandware.static/-/Sites-hansanders-be-Library/default/dw662ac716/Zonnebrillen/Hero%20Banner%20Component/ZONNEBRIL-meekkleurende-glazen-metaal-goud-dames-800x600.jpg"
      />
      <ProductCard 
        name="Moderne Blauwlichtbril"
        description="Bescherm je ogen tegen blauw licht van schermen."
        image="https://www.hansanders.be/dw/image/v2/BJBD_PRD/on/demandware.static/-/Sites-hansanders-be-Library/default/dw662ac716/Zonnebrillen/Hero%20Banner%20Component/ZONNEBRIL-meekkleurende-glazen-metaal-goud-dames-800x600.jpg"
      />
      <ProductCard 
        name="Retro Aviator"
        description="Een klassieke aviator-stijl zonnebril."
        image="https://www.hansanders.be/dw/image/v2/BJBD_PRD/on/demandware.static/-/Sites-hansanders-be-Library/default/dw662ac716/Zonnebrillen/Hero%20Banner%20Component/ZONNEBRIL-meekkleurende-glazen-metaal-goud-dames-800x600.jpg"
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff" , marginT  : 505 },
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 5, marginTop: 70 },
  banner: { width: "100%", height: 200, borderRadius: 10 },
  subtitle: { fontSize: 18, fontWeight: "bold", marginVertical: 10 }
});

export default App;
