import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React, { useState } from "react";
import { Input } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import { useNavigation, useRoute } from "@react-navigation/native";
import { firebaseAuth } from "../../firebase/config";

const CodeVerification = () => {
  const [code, setCode] = useState("");
  const [message, showMessage] = React.useState<any | null>({});
  const route = useRoute<any>();
  const navigation = useNavigation<any>();

  const codeVerify = async () => {
    try {
      const credential = PhoneAuthProvider.credential(route.params.verificationId, code);
      await signInWithCredential(firebaseAuth, credential);
      showMessage({ text: "Phone authentication successful 👍" });
    } catch (err: any) {
      showMessage({ text: `Error: ${err.message}`, color: "red" });
    }
  };
  return (
    <View style={{ height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" style={{ marginVertical: 45, marginHorizontal: 15 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Mã của tôi là</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          {/* <Text style={{borderBottomWidth: 1, borderColor: 'black', lineHeight: 46, marginRight: 15, width: '17%'}}>VN +84</Text> */}
          <Input placeholder="" variant="underlined" marginX={1} w="100%" onChangeText={setCode} />
          {/* <Input placeholder="" variant="underlined" w="16.66666%" marginX={1} />
          <Input placeholder="" variant="underlined" w="16.66666%" marginX={1} />
          <Input placeholder="" variant="underlined" w="16.66666%" marginX={1} />
          <Input placeholder="" variant="underlined" w="16.66666%" marginX={1} />
          <Input placeholder="" variant="underlined" w="16.66666%" marginX={1} /> */}
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
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
          onPress={codeVerify}
        >
          <Text style={{ color: "white" }}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
      {message ? (
        <TouchableOpacity
          style={[{ backgroundColor: "0xffffffee", justifyContent: "center" }]}
          onPress={() => showMessage(null)}
        >
          <Text
            style={{
              color: message.color || "blue",
              fontSize: 17,
              textAlign: "center",
              margin: 20,
            }}
          >
            {message.text}
          </Text>
        </TouchableOpacity>
      ) : undefined}
    </View>
  );
};

export default CodeVerification;
