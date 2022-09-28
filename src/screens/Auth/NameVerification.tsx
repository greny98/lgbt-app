import { View, Text, TouchableOpacity, StatusBar } from "react-native";
import React, { useState } from "react";
import { Input } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../../redux/loading.reducer";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/config";

const NameVerification = () => {
  const navigation = useNavigation<any>();
  const [name, setName] = useState("");
  const route = useRoute<any>();
  const dispatch = useDispatch();

  const nameVerification = async () => {
    const userRef = collection(firestore, "users");
    await setDoc(doc(userRef, route.params.phone), { name });
    navigation.navigate("GenderVerification", { name, ...route.params });
  };
  return (
    <View style={{ height: "100%" }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={30} color="black" style={{ marginVertical: 45, marginHorizontal: 15 }} />
        </TouchableOpacity>
      </View>
      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Tên tôi là</Text>
        <View style={{ flexDirection: "row", width: "100%" }}>
          <Input
            onChangeText={setName}
            placeholder="Tên"
            variant="underlined"
            marginX={1}
            w="100%"
            autoComplete="email"
          />
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={nameVerification}
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

export default NameVerification;
