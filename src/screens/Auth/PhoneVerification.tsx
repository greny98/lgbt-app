import { View, TouchableOpacity, StyleSheet, Text, StatusBar, Keyboard } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "native-base";
import { LinearGradient } from "expo-linear-gradient";
import { firebaseApp, firebaseAuth, firestore } from "../../firebase/config";
import { ApplicationVerifier, PhoneAuthProvider } from "firebase/auth";
import { FirebaseRecaptchaVerifierModal } from "expo-firebase-recaptcha";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../../redux/loading.reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loading from "../Loading";
import { IErrorState, setError } from "../../redux/error.reducer";
import Error from "../Error";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { fetchUser } from "../../redux/user.reducer";

const PhoneVerification = () => {
  const navigation = useNavigation<any>();
  const [phone, setPhone] = useState("");
  const recaptchaVerifier = React.useRef<ApplicationVerifier | null>(null);
  const dispatch = useDispatch<any>();
  const loading = useSelector<RootState>((state) => state.loading.loading);
  const error = useSelector<RootState, IErrorState>((state) => state.error);

  const phoneVerify = async () => {
    try {
      // dispatch(setLoading());
      // const phoneProvider = new PhoneAuthProvider(firebaseAuth);
      // const verificationId = await phoneProvider.verifyPhoneNumber("+84" + phone, recaptchaVerifier.current!);
      // dispatch(removeLoading());
      // navigation.navigate("CodeVerification", { verificationId, phone: "+84" + phone });
      const userRef = collection(firestore, "users");
      const data = await getDoc(doc(userRef, "+84" + phone));
      if (!data.data()) {
        const userRef = collection(firestore, "users");
        await setDoc(doc(userRef, "+84" + phone), { phone: "+84" + phone, images: ["", "", "", "", "", ""] });
        navigation.navigate("NameVerification", { phone: "+84" + phone, images: ["", "", "", "", "", ""] });
      } else {
        await AsyncStorage.setItem("phone", "+84" + phone);
        await dispatch(fetchUser("+84" + phone));
      }
      // navigation.navigate("NameVerification", { phone: "+84" + phone });
    } catch (err) {
      dispatch({ type: setError.toString(), payload: { text: "Số điện thoại không hợp lệ!" } });
      console.log(err);
      dispatch(removeLoading());
    }
  };
  return (
    <>
      {loading && <Loading />}
      {error.show && <Error />}

      <View style={{ height: "100%", alignItems: "center" }} onTouchStart={Keyboard.dismiss}>
        <StatusBar barStyle="dark-content" />
        <FirebaseRecaptchaVerifierModal
          ref={recaptchaVerifier as any}
          firebaseConfig={firebaseApp.options}
          androidHardwareAccelerationDisabled
          attemptInvisibleVerification
        />
        <View style={{ width: "100%" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
              borderColor: !phone.length ? "gray" : "#000",
            }}
            disabled={!phone.length}
            onPress={phoneVerify}
          >
            <Text style={[styles.btnText, { color: !phone.length ? "gray" : "#000" }]}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
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
  },
});
