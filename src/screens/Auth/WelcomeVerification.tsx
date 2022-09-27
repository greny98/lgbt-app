import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNativeBase } from "native-base";
import { useNavigation } from "@react-navigation/native";

const WelcomeVerification = () => {
    const navigation = useNavigation<any>()
    const welcomeVerification = () => {
        navigation.navigate('NameVerification')
    }
  return (
    <View style={{alignItems: "center", height: '100%'}}>
      <View style={{marginVertical: 50}}>
        <Text style={{fontWeight: '700', fontSize: 24, marginBottom: 5}}>Chào mừng bạn đến với Tinder.</Text>
        <Text style={{textAlign: 'center'}}>Vui lòng tuân thủ các Quy Tắc Chung này.</Text>
      </View>

      <View style={{marginHorizontal: 15}}>
        <View style={{marginBottom: 20}}>
          <View style={{flexDirection: 'row', marginBottom: 5,}}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{fontWeight: '700', fontSize: 17, marginLeft: 5}}>Hãy là chính bạn</Text>
          </View>
          <Text>Đảm bảo ảnh độ tuổi và tiểu sử của bạn đều là thật</Text>
        </View>

        <View style={{marginBottom: 20}}>
          <View style={{flexDirection: 'row', marginBottom: 5,}}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{fontWeight: '700', fontSize: 17, marginLeft: 5}}>Đảm bảo an toàn</Text>
          </View>
          <Text>Đừng vội vàng chia sẻ thông tin cá nhân. Hẹn hò an toàn</Text>
        </View>

        <View style={{marginBottom: 20}}>
          <View style={{flexDirection: 'row', marginBottom: 5,}}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{fontWeight: '700', fontSize: 17, marginLeft: 5}}>Cư xử chuẩn mực</Text>
          </View>
          <Text>
            Tôn trọng người khác và đối xử với họ như cách bạn muốn mọi người
            thể hiện với bạn
          </Text>
        </View>

        <View style={{marginBottom: 20}}>
          <View style={{flexDirection: 'row', marginBottom: 5,}}>
            <AntDesign name="check" size={24} color="red" />
            <Text style={{fontWeight: '700', fontSize: 17, marginLeft: 5}}>Hãy chủ động</Text>
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
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 50,
            backgroundColor: "#F5344B",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>TÔI ĐỒNG Ý</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WelcomeVerification;
