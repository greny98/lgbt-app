import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { Input } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { QuizInput } from "react-native-quiz-input";

const HbdVerification = () => {
  const navigation = useNavigation<any>();
  const [typedWord, setTypedWord] = React.useState("");
  const hbdVerification = () => {
    navigation.navigate("GenderVerification")
  };

  const onChange = (data: any) => {
    setTypedWord(data.wordString);
  };

  return (
    <View style={{ height: "100%" }}>
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
          Sinh nhật của tôi là
        </Text>

      </View>

      <View style={{ alignItems: "center" }}>
        <TouchableOpacity
          onPress={hbdVerification}
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

export default HbdVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    // paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'normal',
    textAlign: 'center',
  },
});