import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup/Signup";
import UserHome from "./src/screens/User/UserHome";
import PhoneVerification from "./src/screens/Auth/PhoneVerification";
import CodeVerification from "./src/screens/Auth/CodeVerification";

export default function Main() {
  return <PhoneVerification />;
}

const styles = StyleSheet.create({});
