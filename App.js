import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "./screens/Home";
import IssLocationScreen from "./screens/IssLocation";
import MeteorScreen from "./screens/Meteors";

const Stack = createStackNavigator();

export default function App() {
  return (
   <NavigationContainer>
     <Stack.Navigator initialRouteName = "Home" screenOptions = {{
       headerShown: false
     }}>
       <Stack.screen name = "Home" component = {HomeScreen} />
       <Stack.screen name = "IssLocation" component = {IssLocationScreen} />
       <Stack.screen name = "Meteors" component = {MeteorScreen} />
     </Stack.Navigator>
   </NavigationContainer>
  );
}