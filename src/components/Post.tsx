import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Avatar, Heading, HStack, Image, VStack } from "native-base";

const Post = () => {
  return (
    <VStack>
      <HStack>
        <Image
          source={require("../../assets/images/avt.jpeg")}
          alt="avt"
          rounded="full"
          style={{ width: 60, height: 60, marginRight: 6 }}
        />
        <VStack>
          <Heading style={{ marginBottom: 2 }}>Post</Heading>
          <Text>2:00pm, 25-10-2022</Text>
        </VStack>
      </HStack>
      <HStack>
        <View style={{ width: 66 }} />
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae asperiores pariatur labore debitis deserunt
          corporis neque voluptatem. Fugiat, corporis placeat vel exercitationem nostrum natus consequatur? Molestias
          dolorem corrupti reiciendis ducimus!
        </Text>
      </HStack>
    </VStack>
  );
};

export default Post;

const styles = StyleSheet.create({});
