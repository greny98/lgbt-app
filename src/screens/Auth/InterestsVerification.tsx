import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const InterestsVerification = () => {
  const navigation = useNavigation<any>();
  const interestsVerification = () => {
    navigation.navigate("Slide");
  };
  return (
    <View>
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
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          Sở Thích
        </Text>
        <Text>Hãy cho mọi người biết bạn thích những gì bằng cách thêm sở thích vào hồ sơ</Text>
        <View style={{flexDirection: 'row'}}>
            <TouchableOpacity style={{borderWidth: 1, borderRadius: 60, paddingHorizontal: 15, paddingVertical: 5}}>
                <Text>90S Kid</Text>
            </TouchableOpacity>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={interestsVerification}
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
          <Text style={{ color: "white", fontWeight: "700" }}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestsVerification;
