import { ImageSourcePropType, StyleSheet } from "react-native";
import React from "react";
import { Image, View } from "native-base";

export interface IconBottomTabProps {
  name: string;
  focused: boolean;
}

const imagePaths: { [key: string]: ImageSourcePropType } = {
  home: require("../../assets/icons/tabs/home.png"),
  homeActive: require("../../assets/icons/tabs/home-active.png"),
  grid: require("../../assets/icons/tabs/grid.png"),
  gridActive: require("../../assets/icons/tabs/grid-active.png"),
  message: require("../../assets/icons/tabs/message.png"),
  messageActive: require("../../assets/icons/tabs/message-active.png"),
  user: require("../../assets/icons/tabs/user.png"),
  userActive: require("../../assets/icons/tabs/user-active.png"),
};

export default function IconBottomTab(props: IconBottomTabProps) {
  const { name, focused } = props;
  const imgName = !focused ? name.toLowerCase() : name.toLowerCase() + "Active";
  return (
    <>
      <Image source={imagePaths[imgName]} height={6} width={6} alt={imgName} />
      <View height={1} width={1} borderRadius={4} bg={focused ? "#F41A28" : "#fff"} marginTop={2} />
    </>
  );
}

const styles = StyleSheet.create({});
