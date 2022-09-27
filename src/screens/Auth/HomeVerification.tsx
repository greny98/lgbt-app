import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slide from "./Slide";

const data = [
  require("../../../assets/ltkh.png"),
  require("../../../assets/ltkh.png"),
  require("../../../assets/ltkh.png"),
];

const HomeVerification = () => {
  return (
    <View style={styles.container}>
      <Slide data={data} />

      <View style={styles.information}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View style={{}}>
            <Text style={styles.name}>Lê Thị Khánh Huyền 19</Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <Entypo
                name="dot-single"
                size={24}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.action}>Có hoạt động gần đây</Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 5,
              }}
            >
              <AntDesign
                name="enviromento"
                size={24}
                color="white"
                style={{ marginRight: 5 }}
              />
              <Text style={styles.action}>cách xa 3 km</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ marginTop: 15 }}>
            <AntDesign name="exclamationcircle" size={30} color="white" />
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 15,
          }}
        >
          <TouchableOpacity style={styles.border}>
            <Fontisto name="arrow-return-left" size={24} color="yellow" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.border}>
            <AntDesign name="close" size={24} color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            <MaterialIcons name="star" size={24} color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            <AntDesign name="heart" size={24} color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            <MaterialCommunityIcons
              name="lightning-bolt"
              size={24}
              color="yellow"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default HomeVerification;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
    alignItems: "center",
  },

  information: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    // marginVertical: '10%'
  },

  name: {
    color: "white",
    fontSize: 24,
    marginTop: 10,
  },

  action: {
    color: "white",
    fontSize: 16,
    flexDirection: "column",
  },

  border: {
    height: 50,
    width: 50,
    borderRadius: 60,
    borderColor: "yellow",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
