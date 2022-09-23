import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";
import Login from "./src/screens/Auth/Login";
import Signup from "./src/screens/Auth/Signup";
import UserHome from "./src/screens/User/UserHome";

export default function Main() {
  return <UserHome />;
}

const styles = StyleSheet.create({});
