import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Homescreen from "./screens/homescreen.js";
import Products from "./screens/products.js";
import Productsdetail from "./screens/productsdetail.js";
import Blogpost from "./screens/blogpost.js";
import Blogpostdetail from "./screens/blogpostdetail.js";
import Cartscreen from "./screens/cartscreen.js";
import Wishlist from "./screens/wishlist.js";  // Import wishlist component

const Stack = createStackNavigator();

export default function App() {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homescreen" component={Homescreen} />
        
        <Stack.Screen name="products">
          {(props) => (
            <Products
              {...props}
              cartItems={cartItems}
              setCartItems={setCartItems}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="productsdetail">
          {(props) => (
            <Productsdetail
              {...props}
              cartItems={cartItems}
              setCartItems={setCartItems}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          )}
        </Stack.Screen>
            {/* Wishlist Screen */}
            <Stack.Screen name="wishlist">
          {(props) => (
            <Wishlist
              {...props}
              wishlistItems={wishlistItems}
              setWishlistItems={setWishlistItems}
            />
          )}
        </Stack.Screen>

        <Stack.Screen name="blogpost" component={Blogpost} />
        <Stack.Screen name="blogpostdetail" component={Blogpostdetail} />

        <Stack.Screen name="cartscreen">
          {(props) => (
            <Cartscreen
              {...props}
              cartItems={cartItems}
              setCartItems={setCartItems}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
