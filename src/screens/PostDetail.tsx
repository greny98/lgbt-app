import {
  StyleSheet,
  Text,
  Dimensions,
  StatusBar,
  Platform,
} from "react-native";
import React from "react";
import Post from "../components/Post";
import {
  Center,
  Heading,
  HStack,
  Image,
  ScrollView,
  VStack,
  View,
} from "native-base";
import { useNavigation } from "@react-navigation/native";
const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;
const PostDetail = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />
      <View height={Platform.OS == "android" ? 7 : 50} />
      <View style={styles.logo}>
        <View>
          <Image
            source={require("../../assets/logo/logo-LGBT.png")}
            alt="logo"
            w={logoW}
            h={logoH}
            zIndex={100}
            backgroundColor={"red"}
            top={0}
          />
        </View>
      </View>
      <ScrollView>
        <HStack space={1} paddingX={4} style={{ paddingVertical: 10 }}>
          <Image
            source={require("../../assets/images/av1.png")}
            alt="avt"
            rounded="full"
            style={{ width: 60, height: 60 }}
          />
          <VStack flex={1}>
            <Heading style={{ fontSize: 16 }}>Nguyễn Hải Linh</Heading>
            <Text style={{ fontWeight: "normal", color: "gray" }}>
              @hlinhh
            </Text>
          </VStack>
        </HStack>
        <VStack
          style={{ marginHorizontal: 15, borderBottomWidth: 0.2 }}
          space={3}
        >
          <Text>
            LÀ NGƯỜI ĐỒNG TÍNH, SONG TÍNH VÀ CHUYỂN GIỚI (LGBT) Ở CHÂU Á: BÁO CÁO QUỐC GIA VIỆT NAM:
            https://drive.google.com/drive/folders/1jJdFXNaDFnvjNBz-GK88GDxTSdxCQ0LJ?fbclid=IwAR0lLe3SjoI7FkVvp5SLAiY4yWlCHOsXdFVSPMt4SEiVgUvTOS2MfRKcRQ8
          </Text>
          <Image
            source={require("../../assets/images/content1.png")}
            alt="img"
            style={{ width: "100%", height: 300, borderRadius: 10 }}
          />
          <HStack style={{ paddingVertical: 10 }} space={1}>
            <Text style={{ marginLeft: 5 }}> 09:28 </Text>
            <Text> 2/21/20 </Text>
            <Text style={{ color: "#4C9EEB" }}> Twitter Web App </Text>
          </HStack>
        </VStack>
        <HStack
          style={{
            paddingVertical: 10,
            marginHorizontal: 15,
            borderBottomWidth: 0.2,
          }}
          space={1}
        >
          <Text style={{ fontWeight: "bold", marginLeft: 10 }}>80</Text>
          <Text>Retweets</Text>
          <Text style={{ fontWeight: "bold" }}>2808</Text>
          <Text>Likes</Text>
        </HStack>
        <HStack
          style={{
            justifyContent: "center",
            paddingVertical: 10,
            borderBottomWidth: 0.2,
          }}
          space={20}
        >
          <Image
            source={require("../../assets/icons/comment.png")}
            alt="icon"
          />
          <Image
            source={require("../../assets/icons/retweet.png")}
            alt="icon"
          />
          <Image source={require("../../assets/icons/heart.png")} alt="icon" />
          <Image source={require("../../assets/icons/share.png")} alt="icon" />
        </HStack>
        <Post
          disabled
          activeOpacity={0}
          img={require("../../assets/images/avt.jpeg")}
          name="Nguyễn Anh Tuấn"
          user="@tuangay"
          time="1"
          content="Wowwww...."
          hashtag="#LGBT"
          img_content={require("../../assets/images/contentt1.png")}
          comment="28"
          retweet="5"
          heart="21"
        />
        <Post
          disabled
          activeOpacity={0}
          img={require("../../assets/images/avt1.jpeg")}
          name="Nguyễn Văn Cường"
          user="@cuongno"
          time="2"
          content="Tuyệt vời..."
          hashtag="#Dongtinh"
          img_content={require("../../assets/images/contentt2.png")}
          comment="24"
          retweet="7"
          heart="365"
        />
        <Post
          disabled
          activeOpacity={0}
          img={require("../../assets/images/avt3.jpeg")}
          name="Việt Anh"
          user="@susuva"
          time="3"
          content="Không thể tin nổi"
          hashtag="#Songtinh"
          img_content={require("../../assets/images/contentt3.png")}
          comment="26"
          retweet="42"
          heart="245"
        />
        <Post
          disabled
          activeOpacity={0}
          img={require("../../assets/images/avt4.jpeg")}
          name="Quang Anh"
          user="@qanh"
          time="5"
          content="Nice..."
          hashtag="#Chuyengioi"
          img_content={require("../../assets/images/contentt4.png")}
          comment="13"
          retweet="48"
          heart="672"
        />

        {/* <HStack space={1} paddingX={4} style={{ paddingVertical: 10 }}>
        <Image
          source={require("../../assets/images/avt.jpeg")}
          alt="avt"
          rounded="full"
          style={{ width: 60, height: 60 }}
        />
        <VStack flex={1}>
          <HStack>
            <Heading style={{ fontSize: 16 }}>
              karenne{" "}
              <Text style={{ fontWeight: "normal", color: "gray" }}>
                @karenne
              </Text>{" "}
              {""}
            </Heading>
          </HStack>
        </VStack>
      </HStack> */}
      </ScrollView>
    </View>
  );
};

export default PostDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },

  logo: {
    width: "100%",
    alignItems: "center",
    paddingBottom: 16,
    borderBottomWidth: 0.5,
  },
});
