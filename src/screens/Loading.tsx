import { StyleSheet } from "react-native";
import React from "react";
import { View, VStack, Image } from "native-base";

export default function Loading() {
  return (
    <View justifyContent="center" style={styles.wrapper}>
      <VStack justifyContent="center" alignItems="center" space={3}>
        <Image source={require("../../assets/logo/LGBT-loading.gif")} w={100} h={100} marginRight={4} alt="logo" />
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0, 0.5)",
    zIndex: -1,
    position: "absolute",
  },
});
