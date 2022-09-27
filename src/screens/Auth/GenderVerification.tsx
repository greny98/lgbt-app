import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

const GenderVerification = () => {
  const navigation = useNavigation<any>();
  const genderVerification = () => {
    navigation.navigate("SexVerification");
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" />

      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={30}
            color="black"
            style={{ marginVertical: 45, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Tôi là</Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={genderVerification}
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
          <Text style={{ color: "white", fontWeight: "700" }}>Nữ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={genderVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 20,
            backgroundColor: "#F5344B",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Nam</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={genderVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 20,
            backgroundColor: "#F5344B",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "white",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>Khác</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
};

export default GenderVerification;
