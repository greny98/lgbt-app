import { Text, TouchableOpacity, Dimensions, Platform } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Center, Image, View } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user.reducer";
import { removeLoading, setLoading } from "../../redux/loading.reducer";

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;

const WelcomeVerification = () => {
  // const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const route = useRoute<any>();

  const welcomeVerification = async () => {
    dispatch(setLoading());
    await AsyncStorage.setItem("phone", route.params.phone);
    await dispatch(fetchUser(route.params.phone));
    dispatch(removeLoading());
  };
  return (
    <Center>
      <View style={{ height: Platform.OS == "android" ? 8 : 80 }} />
      <View style={{ width: "100%", alignItems: "center" }}>
        <View style={{ marginBottom: 20 }}>
          <Image source={require("../../../assets/logo/logo-LGBT.png")} alt="logo" w={logoW} h={logoH} />
        </View>
      </View>
      <View style={{ marginVertical: 40 }}>
        <Text style={{ fontWeight: "700", fontSize: 24, marginBottom: 5 }}>Chào mừng bạn đến với Tinder.</Text>
        <Text style={{ textAlign: "center" }}>Vui lòng tuân thủ các Quy Tắc Chung này.</Text>
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{ fontWeight: "700", fontSize: 17, marginLeft: 5 }}>Hãy là chính bạn</Text>
          </View>
          <Text>Đảm bảo ảnh độ tuổi và tiểu sử của bạn đều là thật</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{ fontWeight: "700", fontSize: 17, marginLeft: 5 }}>Đảm bảo an toàn</Text>
          </View>
          <Text>Đừng vội vàng chia sẻ thông tin cá nhân. Hẹn hò an toàn</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{ fontWeight: "700", fontSize: 17, marginLeft: 5 }}>Cư xử chuẩn mực</Text>
          </View>
          <Text>Tôn trọng người khác và đối xử với họ như cách bạn muốn mọi người thể hiện với bạn</Text>
        </View>

        <View style={{ marginBottom: 20 }}>
          <View style={{ flexDirection: "row", marginBottom: 5 }}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{ fontWeight: "700", fontSize: 17, marginLeft: 5 }}>Hãy chủ động</Text>
          </View>
          <Text>Luôn báo cáo hành vi xấu</Text>
        </View>
      </View>

      <View>
        <TouchableOpacity
          onPress={welcomeVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 30,
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: 16 }}>TÔI ĐỒNG Ý</Text>
        </TouchableOpacity>
      </View>
    </Center>
  );
};

export default WelcomeVerification;
