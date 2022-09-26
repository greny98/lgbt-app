/**
 TODO: Chat History - Tuan
 */
import { Platform, StatusBar, StyleSheet, Text } from "react-native";
import React from "react";
import MessageItem from "../../components/MessageItem";
import { Heading, HStack, Image, ScrollView, View } from "native-base";

export default function ListMassage() {
  return (
    <View style={{ flex: 1, paddingHorizontal: 8 }}>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} />
      <HStack height={50} alignItems="center">
        <Image source={require("../../../assets/images/avartar.png")} height={50} width={50} />
        <Heading flex={1} textAlign="center">
          LGBT
        </Heading>

        <Image source={require("../../../assets/icons/shield.png")} style={{ width: 30, height: 30 }} alt="icon" />
      </HStack>
      <ScrollView flex="1" paddingY={4}>
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
        <MessageItem avt={require("../../../assets/images/avartar.png")} content="Hello I'm Tuan" name="Nguyen Tuan" />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
