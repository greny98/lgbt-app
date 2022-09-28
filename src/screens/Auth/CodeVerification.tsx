import { View, Text, TouchableOpacity, StatusBar, Keyboard } from "react-native";
import React, { useState } from "react";
import { Input } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firebaseAuth, firestore } from "../../firebase/config";
import { useDispatch } from "react-redux";
import { fetchUser } from "../../redux/user.reducer";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { removeLoading, setLoading } from "../../redux/loading.reducer";
import { IErrorState, setError } from "../../redux/error.reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Loading from "../Loading";
import Error from "../Error";

const userRef = collection(firestore, "users");

const CodeVerification = () => {
  const [code, setCode] = useState("");
  const route = useRoute<any>();
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();
  const loading = useSelector<RootState>((state) => state.loading.loading);
  const error = useSelector<RootState, IErrorState>((state) => state.error);

  const codeVerify = async () => {
    try {
      dispatch(setLoading());
      const credential = PhoneAuthProvider.credential(route.params.verificationId, code);
      await signInWithCredential(firebaseAuth, credential);
      const data = await getDoc(doc(userRef, route.params.phone));
      if (!data.data()) {
        const userRef = collection(firestore, "users");
        await setDoc(doc(userRef, route.params.phone), { phone: route.params.phone });
        navigation.navigate("NameVerification", { phone: route.params.phone });
      } else {
        await AsyncStorage.setItem("phone", route.params.phone);
        await dispatch(fetchUser(route.params.phone));
      }
      dispatch(removeLoading());
    } catch (err: any) {
      dispatch({ type: setError.toString(), payload: { text: "Nhập sai mã OTP" } });
      console.log(err);

      dispatch(removeLoading());
    }
  };
  return (
    <>
      {loading && <Loading />}
      {error.show && <Error />}
      <View style={{ height: "100%" }} onTouchStart={Keyboard.dismiss}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: "100%" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={30} color="black" style={{ marginVertical: 45, marginHorizontal: 15 }} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "80%", marginHorizontal: "10%" }}>
          <Text style={{ fontSize: 26, fontWeight: "700" }}>Mã của tôi là</Text>
          <View style={{ flexDirection: "row", width: "100%", marginTop: 16 }}>
            <Input placeholder="Code" fontSize={16} variant="underlined" w="100%" onChangeText={setCode} />
          </View>
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
              borderColor: !code.length ? "gray" : "#000",
            }}
            onPress={codeVerify}
          >
            <Text style={[{ fontWeight: "700" }, { color: !code.length ? "gray" : "#000" }]}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default CodeVerification;
