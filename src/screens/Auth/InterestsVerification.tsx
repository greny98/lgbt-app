import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { BLACK } from "../../../assets/styles";

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
  "Harry Potter",
  "Suối nước nóng",
  "Đi Concert",
  "Massage",
];

interface InterestType {
  [key: string]: boolean;
}

const InterestsVerification = () => {
  const navigation = useNavigation<any>();
  const [interestsType, setInterestsType] = useState<InterestType>({});
 
  // const newObject = interestsType;
  // console.log(interestsType);
  // const newObject2 = Object.assign({}, interests);
  // console.log(newObject)
  // console.log(newObject2)

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
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Sở Thích</Text>
        <Text>
          Hãy cho mọi người biết bạn thích những gì bằng cách thêm sở thích vào
          hồ sơ
        </Text>
        <View style={{ flexDirection: "row", flexWrap: "wrap", marginTop: 10 }}>
          {interests.map((value, index) => (
            <TouchableOpacity       
              disabled ={Object.keys(interestsType).length >=3 && !interestsType[value] ? true : false}
              key={`${index}-${value}`}
              style={{
                borderWidth: 1,
                borderRadius: 60,
                paddingHorizontal: 15,
                paddingVertical: 5,
                margin: 4,
                borderColor: interestsType[value]? 'black': '#d4d1d1',
              }}
              
              onPress={() => {
                const newIn = {...interestsType}
                if (interestsType[value]) {
                  delete newIn[value];
                } else {
                  newIn[value] = true;     
                }
                console.log(newIn)
                setInterestsType(newIn);
                
              }}
            >
              <Text style={{
                color: interestsType[value] ? 'black' : '#d4d1d1', 
              }}
                >
                  {value}
                </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        {Object.keys(interestsType).length>=3 && <TouchableOpacity
          // onPress={interestsVerification}
          style={{
            width: 342,
            height: 56,
            borderRadius: 30,
            marginTop: 20,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "black",
          }}
        >
          <Text style={{ color: "black", fontWeight: "700" }}>TIẾP TỤC {Object.keys(interestsType).length}/3</Text>
        </TouchableOpacity>}
      </View>
    </View>
  );
};

export default InterestsVerification;
