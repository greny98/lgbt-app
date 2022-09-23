import { StyleSheet } from "react-native";
import React from "react";
import { Spinner, View, Text, VStack } from "native-base";
import { LinearGradient } from "expo-linear-gradient";

export default function Loading() {
  return (
    <View justifyContent="center" style={styles.wrapper}>
      <LinearGradient colors={["#FD297B", "#FF5864", "#FF655B"]} style={styles.gradient} />
      <VStack justifyContent="center" alignItems="center" space={3}>
        <Text bold fontSize={25} color="white">Loading</Text>
        <Spinner color="white" size="lg" />
      </VStack>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
