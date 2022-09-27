import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup/Signup";
import UserHome from "./src/screens/User/UserHome";
import PhoneVerification from "./src/screens/Auth/PhoneVerification";
import CodeVerification from "./src/screens/Auth/CodeVerification";
import EmailVerification from "./src/screens/Auth/EmailVerification";

export default function Main() {
  return <EmailVerification />;
}

const styles = StyleSheet.create({});
