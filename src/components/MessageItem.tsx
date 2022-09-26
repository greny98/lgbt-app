import { ImageSourcePropType, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Heading, HStack, Image, Text, View, VStack } from "native-base";

export interface MessageItemProps extends TouchableOpacityProps {
  avt: ImageSourcePropType;
  name: string;
  content: string;
}

export default function MessageItem(props: MessageItemProps) {
  const { avt, name, content, ...rest } = props;
  return (
    <TouchableOpacity style={styles.btn} onPress={() => {}} {...rest}>
      <HStack>
        <Image source={avt} alt="Avatar" style={styles.avt} />
        <VStack padding={3} justifyContent="space-between" borderBottomWidth={1} borderBottomColor="gray.300" flex="1">
          <Heading fontSize={20}>{name}</Heading>
          <Text numberOfLines={1}>{content}</Text>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    marginVertical: 4
  },
  avt: {
    width: 80,
    height: 80,
  },
});
