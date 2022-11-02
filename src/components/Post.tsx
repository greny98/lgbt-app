import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import React from "react";
import {
  Avatar,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  VStack,
} from "native-base";
import { useNavigation } from "@react-navigation/native";

export interface PostProps {
  img: ImageSourcePropType;
  name: string;
  user: string;
  time: string;
  content: string;
  hashtag: string;
  img_content: ImageSourcePropType;
  comment: string;
  retweet: string;
  heart: string;
}

const Post = (props: PostProps) => {
  const navigation = useNavigation<any>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("PostDetailScreen");
      }}
      style={{ borderWidth: 0.2 }}
    >
      <HStack space={1} paddingX={4} style={{ paddingVertical: 10 }}>
        <Image
          source={props.img}
          alt="avt"
          rounded="full"
          style={{ width: 60, height: 60 }}
        />
        <VStack flex={1}>
          <HStack>
            <Heading style={{ fontSize: 16 }}>
              {props.name}{" "}
              <Text style={{ fontWeight: "normal", color: "gray" }}>
                {props.user}
              </Text>{" "}
              {""}
              <Text style={{ fontWeight: "normal", color: "gray" }}>
                {props.time}h
              </Text>
            </Heading>
          </HStack>
          <Text numberOfLines={4}>
            {props.content}
            <Text style={{ color: "#4C9EEB" }}>{props.hashtag}</Text>
          </Text>
          <Image
            source={props.img_content}
            alt="img"
            style={{ borderRadius: 10 }}
          />
          <HStack marginTop={2} space={12}>
            <HStack style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/icons/comment.png")}
                alt="icon"
              />
              <Text style={styles.number}>{props.comment}</Text>
            </HStack>
            <HStack style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/icons/retweet.png")}
                alt="icon"
              />
              <Text style={styles.number}>{props.retweet}</Text>
            </HStack>
            <HStack style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/icons/heart.png")}
                alt="icon"
              />
              <Text style={styles.number}>{props.heart}</Text>
            </HStack>
            <HStack style={{ alignItems: "center" }}>
              <Image
                source={require("../../assets/icons/share.png")}
                alt="icon"
              />
            </HStack>
          </HStack>
        </VStack>
      </HStack>
    </TouchableOpacity>
  );
};

export default Post;

const styles = StyleSheet.create({
  number: {
    marginLeft: 3,
    color: "gray",
  },
  btn: {
    color: "#4C9EEB",
  },
});
