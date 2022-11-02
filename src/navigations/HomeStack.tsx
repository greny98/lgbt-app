import React from "react";
import { StyleSheet } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import PostDetail from "../screens/PostDetail";

interface HomeStackParams {
  Home: {};
  PostDetailScreen: {};
}
const Stack = createNativeStackNavigator<HomeStackParams & ParamListBase>();

export default function HomeStack() {
  return (
    <Stack.Navigator initialRouteName="HomeScreen">
      <Stack.Screen name="HomeScreen" component={Home} options={{ headerShown: false }} />
      <Stack.Screen name="PostDetailScreen" component={PostDetail} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
