import { View, Text, StatusBar, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const ShowVerification = () => {
  const navigation = useNavigation<any>();
  const showVerification = () => {
    navigation.navigate("SchoolVerification");
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
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          Hiển thị cho tôi
        </Text>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={showVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 50,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#e2e2e2",
          }}
        >
          <Text style={{ color: "#e2e2e2", fontWeight: "700" }}>Nữ</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 20,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#e2e2e2",
          }}
        >
          <Text style={{ color: "#e2e2e2", fontWeight: "700" }}>Nam</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={showVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 20,
            backgroundColor: "white",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "#e2e2e2",
          }}
        >
          <Text style={{ color: "#e2e2e2", fontWeight: "700" }}>Khác</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ShowVerification;
