import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const interests = [
  "Gym",
  "Đọc sách",
  "Yoga",
  "Spa",
  "Thiền",
  "Soundcloud",
  "Cà phê",
  "Du lịch",
  "Guitar",
  "Instagram",
  "Xem phim",
  "Hip hop",
  "Giày Sneaker",
  "Sushi",
  "Chạy",
  "Hockey",
  "Chạy",
  "Harry Potter",
  "Suối nước nóng",
  "Đi Concert",
  "Massage"
];

const InterestsVerification = () => {
  const navigation = useNavigation<any>();
  const interestsVerification = () => {
    navigation.navigate("Slide");
  };
  return (
    <View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" style={{ marginVertical: 45, marginHorizontal: 15 }} />
        </TouchableOpacity>
      </View>

      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Sở Thích</Text>
        <Text>Hãy cho mọi người biết bạn thích những gì bằng cách thêm sở thích vào hồ sơ</Text>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity style={{ borderWidth: 1, borderRadius: 60, paddingHorizontal: 15, paddingVertical: 5 }}>
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
            borderRadius: 30,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            // borderColor: gender.i !== -1 ? "black" : "gray",
          }}
        >
          <Text style={{ color: "white", fontWeight: "700" }}>TIẾP TỤC</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InterestsVerification;
