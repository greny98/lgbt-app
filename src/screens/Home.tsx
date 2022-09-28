import {
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Fontisto } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Slide from "./Auth/Slide";
import { Image, View } from "native-base";

const data = [
  require("../../assets/ltkh.png"),
  require("../../assets/ltkh.png"),
  require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
];

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;

const HomeVerification = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View height={Platform.OS == "android" ? 7 : 50} />
      <View style={styles.logo}>
        <View>
          <Image
            source={require("../../assets/logo/logo-LGBT.png")}
            alt="logo"
            w={logoW}
            h={logoH}
            zIndex={100}
            backgroundColor={'red'}
            // position={'absolute'}
            top={0}
          />
        </View>
      </View>

      <Slide data={data} />

      <View style={styles.information}>
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>Lê Thị Khánh Huyền 19</Text>
            <View style={styles.form}>
              <Entypo
                name="dot-single"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.action}>Có hoạt động gần đây</Text>
            </View>
            <View style={styles.enviromento}>
              <AntDesign
                name="enviromento"
                size={24}
                color="white"
                style={styles.icon}
              />
              <Text style={styles.action}>cách xa 3 km</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ marginTop: 20 }}>
            <AntDesign name="exclamationcircle" size={30} color="white" />
          </View>
        </View>

        <View style={styles.button}>
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

  logo: { 
    width: "100%", 
    alignItems: "center", 
    marginBottom: 10 
  },

  information: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    zIndex: 10,
  },

  name: {
    color: "white",
    fontSize: 24,
    marginTop: 10,
  },

  form: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  icon: {
    marginRight: 5,
  },

  action: {
    color: "white",
    fontSize: 15,
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

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  enviromento: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  }, 

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
}
});
