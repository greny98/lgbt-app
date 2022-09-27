import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { Input } from "native-base";
import { useNavigation } from "@react-navigation/native";

const EmailVerification = () => {
  const navigation = useNavigation<any>();
  const emailVerification = () => {
    navigation.navigate('WelcomeVerification')
  }
  return (
    <View style={{ height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <AntDesign
            name="left"
            size={30}
            color="black"
            style={{ marginVertical: 45, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          Email của bạn là gi?
        </Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Input placeholder="Nhập email" variant="underlined" marginX={1} w="100%" autoComplete='email' />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={emailVerification}
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
          <Text style={{ color: "white", fontWeight: '700'}}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={[{ backgroundColor: "0xffffffee", justifyContent: "center" }]}
      >
        <Text
          style={{
            // color: message.color || "blue",
            fontSize: 17,
            textAlign: "center",
            margin: 20,
          }}
        ></Text>
      </TouchableOpacity>
    </View>
  );
};

export default EmailVerification;