import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./src/screens/home/screens/HomeScreen";
import Promotions from "./src/screens/home/screens/Promotions";

const Stack = createStackNavigator();

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="">
          <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
          <Stack.Screen name="Promotions" component={Promotions} options={{ headerShown: false }}/>
        </Stack.Navigator>
      </NavigationContainer>
  )
}
