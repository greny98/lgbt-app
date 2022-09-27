import React from "react";
import { StyleSheet } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import PhoneVerification from "../screens/Auth/PhoneVerification";
import CodeVerification from "../screens/Auth/CodeVerification";
import EmailVerification from "../screens/Auth/EmailVerification";
import WelcomeVerification from "../screens/Auth/WelcomeVerification";
import NameVerification from "../screens/Auth/NameVerification";
import HbdVerification from "../screens/Auth/HbdVerification";
import GenderVerification from "../screens/Auth/GenderVerification";
import SexVerification from "../screens/Auth/SexVerification";
import ShowVerification from "../screens/Auth/ShowVerification";


const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="NameVerification">
      {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
      <Stack.Screen name="PhoneVerification" component={PhoneVerification} options={{ headerShown: false }} />
      <Stack.Screen name="CodeVerification" component={CodeVerification} options={{ headerShown: false }} />
      <Stack.Screen name="EmailVerification" component={EmailVerification} options={{ headerShown: false }} />
      <Stack.Screen name="WelcomeVerification" component={WelcomeVerification} options={{ headerShown: false }} /> */}
      <Stack.Screen name="NameVerification" component={NameVerification} options={{ headerShown: false }} />
      <Stack.Screen name="HbdVerification" component={HbdVerification} options={{ headerShown: false }} />
      <Stack.Screen name="GenderVerification" component={GenderVerification} options={{ headerShown: false }} />
      <Stack.Screen name="SexVerification" component={SexVerification} options={{ headerShown: false }} />
      <Stack.Screen name="ShowVerification" component={ShowVerification} options={{ headerShown: false }} />
      {/* <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} /> */}
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
