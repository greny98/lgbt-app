import { StyleSheet, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUser } from "../@types";
import { Heading, View } from "native-base";

export default function Home() {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  
  return (
    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      {/* <Heading>{user.firstName}</Heading>
      <Heading>{user.lastName}</Heading> */}
    </View>
  );
}

const styles = StyleSheet.create({});
