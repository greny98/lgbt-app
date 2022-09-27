import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { Image, StatusBar } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user.reducer";

const logoW = Dimensions.get("screen").width * 0.8;
const logoH = (994 / 2596) * logoW;

export default function Login() {
  const navigation = useNavigation<any>();
  const phoneVerify = () => {
    navigation.navigate("PhoneVerification");
  };

  const dispatch = useDispatch<any>();

  return (
    <View style={{ flex: 1, justifyContent: "center" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ marginBottom: 50 }}>
          <Image source={require("../../../assets/logo/logo-LGBT.png")} alt="logo" w={logoW} h={logoH} />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 342,
            marginBottom: 15,
          }}
        >
          <Text style={{ width: "100%", textAlign: "center", fontSize: 15, marginBottom: 18 }}>
            Khi Tạo Tài Khoản hoặc Đăng Nhập, bạn đồng ý với Điều Khoản của chúng tôi. Tìm hiểu về cách chúng tôi
            xử lý dữ liệu của bạn trong Chính sách Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
          </Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", position: "relative" }}>
            <AntDesign
              name="apple1"
              size={24}
              style={{ position: "absolute", zIndex: 10, top: 24, left: 20, fontSize: 24 }}
            />
            <TouchableOpacity
              style={{
                width: 342,
                height: 56,
                borderRadius: 60,
                paddingHorizontal: 15,
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              <Text>ĐĂNG NHẬP VỚI APPLE</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", position: "relative" }}>
            <Entypo
              name="facebook-with-circle"
              size={24}
              style={{ position: "absolute", zIndex: 10, top: 24, left: 20, fontSize: 24 }}
            />
            <TouchableOpacity
              style={{
                width: 342,
                height: 56,
                borderRadius: 60,
                paddingHorizontal: 15,
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
              }}
            >
              <Text>ĐĂNG NHẬP VỚI FACEBOOK</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", position: "relative" }}>
            {/* <Entypo name="facebook-with-circle" size={24} /> */}
            <Feather
              name="message-circle"
              size={24}
              style={{ position: "absolute", zIndex: 10, top: 24, left: 20, fontSize: 24 }}
            />
            <TouchableOpacity
              style={{
                width: 342,
                height: 56,
                borderRadius: 60,
                paddingHorizontal: 15,
                marginTop: 10,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 1,
              }}
              onPress={phoneVerify}
            >
              <Text>ĐĂNG NHẬP VỚI SỐ ĐIỆN THOẠI</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 20 }}>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <Text style={{ marginRight: 5 }}>Sự cố khi</Text>
          <TouchableOpacity style={{ justifyContent: "center", alignItems: "center" }}>
            <Text style={{ fontWeight: "700" }}>Đăng Nhập?</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
  },
});
