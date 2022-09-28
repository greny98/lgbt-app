import { Text, TouchableOpacity, StatusBar, Platform } from "react-native";
import React, { useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Center, HStack, View } from "native-base";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/config";

const genders = ["Dị tính", "Đồng tính nam", "Đồng tính nữ", "Song tính", "Vô tính", "Toàn tính", "Phi dị tính"];

const GenderVerification = () => {
  const navigation = useNavigation<any>();
  const route = useRoute<any>();
  const [gender, setGender] = useState({ i: 0, text: "" });

  const genderVerification = async () => {
    const userRef = collection(firestore, "users");
    await setDoc(doc(userRef, route.params.phone), { ...route.params, gender: gender.text });
    navigation.navigate("WelcomeVerification", { ...route.params, gender: gender.text });
  };

  const onPress = (text: string, i: number) => () => {
    if (i === gender.i) setGender({ i: -1, text: "" });
    else setGender({ text, i });
  };
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View height={Platform.OS == "android" ? 8 : 50} />

      <HStack justifyContent="space-between" alignItems="center" paddingX={2}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Giới tính của tôi là</Text>
        <View w={30} />
      </HStack>

      <Center marginTop={8}>
        {genders.map((g, i) => (
          <TouchableOpacity
            key={g}
            onPress={onPress(g, i)}
            style={{
              height: 30,
              marginVertical: 20,
              borderBottomWidth: i === gender.i ? 1 : 0,
            }}
          >
            <Text style={{ color: i === gender.i ? "black" : "gray", fontWeight: "700", fontSize: 18 }}>{g}</Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={genderVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 30,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: gender.i !== -1 ? "black" : "gray",
          }}
          disabled={gender.i === -1}
        >
          <Text style={{ fontWeight: "700", fontSize: 16, color: gender.i !== -1 ? "black" : "gray" }}>Tiếp theo</Text>
        </TouchableOpacity>
      </Center>
    </View>
  );
};

export default GenderVerification;
