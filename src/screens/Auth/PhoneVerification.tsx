import { View, TouchableOpacity, StyleSheet, Text, StatusBar } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { firebaseApp, firebaseAuth } from "../../firebase/config";
import { ApplicationVerifier, PhoneAuthProvider } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useNavigation } from "@react-navigation/native";

const PhoneVerification = () => {
  const navigation = useNavigation<any>();
  const [phone, setPhone] = useState("");
  const recaptchaVerifier = React.useRef<ApplicationVerifier | null>(null);
  const phoneVerify = async () => {
    const phoneProvider = new PhoneAuthProvider(firebaseAuth);
    const verificationId = await phoneProvider.verifyPhoneNumber("+84" + phone, recaptchaVerifier.current!);
    navigation.navigate("CodeVerification", { verificationId });
  };
  return (
    <View style={{ height: "100%", alignItems: "center" }}>
      <StatusBar barStyle="dark-content" />
      <FirebaseRecaptchaVerifierModal
        ref={recaptchaVerifier as any}
        firebaseConfig={firebaseApp.options}
        androidHardwareAccelerationDisabled
        attemptInvisibleVerification
      />
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" style={{ marginVertical: 45, marginHorizontal: 15 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Số điện thoại của tôi là</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Text style={{ borderBottomWidth: 1, borderColor: "black", lineHeight: 46, marginRight: 15, width: "17%" }}>
            VN +84
          </Text>
          <Input
            onChangeText={(text) => setPhone(text)}
            placeholder="Nhập số điện thoại"
            keyboardType="number-pad"
            variant="underlined"
            w="78%"
            fontSize={16}
          />
        </View>
        <Text style={{ marginTop: 40, fontSize: 15 }}>
          Chúng tôi sẽ gửi tin nhắn cùng mã xác minh. Bạn có thẻ phải trả phí tin nhắn và dữ liệu. Tìm hiểu chuyện gì
          xảy ra khi số điện thoại của bạn thay đổi
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          style={{
            width: 342,
            height: 56,
            borderRadius: 30,
            marginTop: 50,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
          }}
          disabled={!phone.length}
          onPress={phoneVerify}
        >
          <LinearGradient
            colors={["#FD297B", "#FF5864", "#FF655B"]}
            style={[styles.gradient, { opacity: !phone.length ? 0.5 : 1 }]}
          />
          <Text style={styles.btnText}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PhoneVerification;

const styles = StyleSheet.create({
  gradient: {
    width: "100%",
    height: "100%",
    position: "absolute",
    borderRadius: 30,
  },
  btnText: {
    fontWeight: "700",
    color: "#fff",
  },
});
