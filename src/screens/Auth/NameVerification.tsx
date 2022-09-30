import { View, TouchableOpacity, StatusBar, Platform } from "react-native";
import React, { useState } from "react";
import { Heading, HStack, Input, Button, Text } from "native-base";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../../redux/loading.reducer";
import { collection, doc, setDoc } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IErrorState, setError } from "../../redux/error.reducer";
import Error from "../Error";
import Loading from "../Loading";

const NameVerification = () => {
  const navigation = useNavigation<any>();
  const dispatch = useDispatch<any>();

  const error = useSelector<RootState, IErrorState>((state) => state.error);
  const [name, setName] = useState("");
  const [date, setDate] = useState<{ value: Date; show: string } | null>(null);
  const route = useRoute<any>();
  const loading = useSelector<RootState>((state) => state.loading.loading);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date: Date) => {
    if (moment(new Date()).diff(date, "years") < 18) {
      dispatch({ type: setError.toString(), payload: { text: "Bạn phải trên 18 tuổi!" } });
    } else {
      setDate({
        value: date,
        show: moment(date).format("DD - MM - YYYY"),
      });
    }
    hideDatePicker();
  };

  const nameVerification = async () => {
    dispatch(setLoading());
    const nameSplited = name.split(" ");
    let firstName = "",
      lastName = "";
    if (nameSplited.length === 1) {
      firstName = name;
    } else {
      firstName = nameSplited[0];
      lastName = nameSplited.slice(1).join(" ");
    }
    const userRef = collection(firestore, "users");
    await setDoc(doc(userRef, route.params.phone), { ...route.params, firstName, lastName, birthday: date?.value });
    navigation.navigate("GenderVerification", { ...route.params, firstName, lastName, birthday: date?.value });
    dispatch(removeLoading());
  };

  return (
    <>
      {error.show && <Error />}
      {loading && <Loading />}
      <View style={{ height: "100%" }}>
        <StatusBar barStyle="dark-content" />
        <HStack
          style={{
            width: "100%",
            marginTop: Platform.OS == "android" ? 25 : 46,
            paddingHorizontal: 16,
            justifyContent: "space-between",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <AntDesign name="close" size={30} color="black" />
          </TouchableOpacity>
          <Heading>Thông tin của tôi</Heading>
          <View style={{ width: 30 }} />
        </HStack>
        <View style={{ width: "80%", marginHorizontal: "10%" }}>
          <HStack style={{ flexDirection: "row", width: "100%" }}>
            <Input
              onChangeText={setName}
              fontSize={16}
              placeholder="Tên tôi là"
              variant="underlined"
              w="100%"
              marginBottom={8}
            />
          </HStack>
          <TouchableOpacity
            style={{ borderBottomWidth: 1, borderBottomColor: date ? "black" : "gray" }}
            onPress={showDatePicker}
          >
            <Text fontSize={16} marginBottom={2} color={date ? "black" : "gray.400"}>
              {date ? date.show : "Ngày sinh"}
            </Text>
          </TouchableOpacity>
        </View>

        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          modalStyleIOS={{ width: "95%" }}
          style={{ width: "100%", height: 200 }}
        />

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            onPress={nameVerification}
            style={{
              width: 342,
              height: 56,
              borderRadius: 30,
              marginTop: 50,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: !name.length || !date ? "gray" : "#000",
            }}
            disabled={!name.length || !date}
          >
            <Text style={{ color: !name.length || !date ? "gray" : "#000" }}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default NameVerification;
