import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Input } from "native-base";

const SchoolVerification = () => {
  const navigation = useNavigation<any>();
  const schoolVerification = () => {
    navigation.navigate("InterestsVerification");
  };
  return (
    <View style={{ height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="close"
            size={30}
            color="black"
            style={{ marginVertical: 45, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>
          Trường của tôi là
        </Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Input
            // onChangeText={(text) => setName(text)}
            placeholder="Tên trường"
            variant="underlined"
            marginX={1}
            w="100%"
            autoComplete="email"
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={schoolVerification}
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
          <Text style={{ color: "white", fontWeight: "700" }}>BỎ QUA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SchoolVerification;
