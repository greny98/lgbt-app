import { Dimensions, StyleSheet } from "react-native";
import React from "react";
import { Button, Text, View } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IErrorState, removeError } from "../redux/error.reducer";
import { useDispatch } from "react-redux";

const Error = () => {
  const error = useSelector<RootState, IErrorState>((state) => state.error);
  const dispatch = useDispatch();
  return (
    <>
      <View justifyContent="center" style={styles.wrapper} />
      <View style={styles.boxWrapper}>
        <View style={styles.box}>
          <View style={styles.iconWrapper} bg="red.600">
            <AntDesign name="close" size={40} color="white" />
          </View>
          <Text fontSize={15}>{error.text}</Text>
          <Button w={100} colorScheme="red" onPress={() => dispatch(removeError())}>
            Close
          </Button>
        </View>
      </View>
    </>
  );
};

export default Error;

const styles = StyleSheet.create({
  wrapper: {
    position: "absolute",
    zIndex: -1,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.6)",
  },
  iconWrapper: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
    borderColor: "#fff",
    position: "absolute",
    left: 140 - 26.5,
    top: -23.5,
  },
  boxWrapper: {
    position: "absolute",
    left: Dimensions.get("screen").width / 2 - 140,
    top: Dimensions.get("screen").height / 2 - 156 / 2,
    zIndex: 1,
  },
  box: {
    width: 280,
    height: 156,
    backgroundColor: "#fff",
    top: 0,
    borderRadius: 20,
    alignItems: "center",
    paddingTop: 25,
    justifyContent: "space-around",
  },
});
