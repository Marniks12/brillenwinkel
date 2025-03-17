import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import homescreen from "./screens/homescreen.js";
import detail from "./screens/detail.js";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="homescreen" component={homescreen} />
        <Stack.Screen name="detail" component={detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
