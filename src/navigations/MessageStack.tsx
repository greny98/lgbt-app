import React from "react";
import { StyleSheet } from "react-native";
import { ParamListBase } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ListMassage from "../screens/Message/ListMassage";
import Message from "../screens/Message/Message";

interface MessageStackParams {
  ListMassage: {};
  MessageScreen: {
    fr: string;
  };
}
const Stack = createNativeStackNavigator<MessageStackParams & ParamListBase>();

export default function MessageStack() {
  return (
    <Stack.Navigator initialRouteName="ListMassage">
      <Stack.Screen name="ListMassage" component={ListMassage} options={{ headerShown: false }} />
      <Stack.Screen name="MessageScreen" component={Message} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
