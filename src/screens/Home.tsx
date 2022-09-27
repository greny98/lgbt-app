import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUser } from "../@types";
import { Heading, View } from "native-base";
import { useDispatch } from "react-redux";
import { removeUser } from "../redux/user.reducer";

export default function Home() {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  const dispatch = useDispatch<any>();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {/* <Heading>{user.firstName}</Heading>
      <Heading>{user.lastName}</Heading> */}
      <TouchableOpacity onPress={() => dispatch(removeUser())}>
        <Text>Test</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
