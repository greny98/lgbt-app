import { ImageSourcePropType, StyleSheet, TouchableOpacity, TouchableOpacityProps } from "react-native";
import React from "react";
import { Heading, HStack, Image, Text, VStack } from "native-base";
import moment from "moment";

export interface MessageItemProps extends TouchableOpacityProps {
  avt: ImageSourcePropType;
  name: string;
  content: string;
  createdAt: Date;
}

const dateToStr = (date: Date) => {
  if (moment(date).diff(new Date(), "day") === 0) return moment(date).format("h:mm a");
  else return moment(date).format("DD-MM, h:mm a");
};

export default function MessageItem(props: MessageItemProps) {
  const { avt, name, content, createdAt, ...rest } = props;

  return (
    <TouchableOpacity style={styles.btn} onPress={() => {}} {...rest}>
      <HStack>
        <Image source={avt} alt="Avatar" style={styles.avt} />
        <VStack padding={3} justifyContent="space-between" borderBottomWidth={1} borderBottomColor="gray.300" flex="1">
          <Heading fontSize={20}>{name}</Heading>
          <HStack space={3}>
            <Text numberOfLines={1}>{content}</Text>
            <Text numberOfLines={1} color="gray.400" fontStyle="italic">{dateToStr(createdAt)}</Text>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: "100%",
    marginVertical: 4,
  },
  avt: {
    width: 80,
    height: 80,
  },
});
