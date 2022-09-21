import React from "react";
import { StyleSheet } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";

interface HomeStackParams {
  Home: {};
}
const Stack = createNativeStackNavigator<HomeStackParams & ParamListBase>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
