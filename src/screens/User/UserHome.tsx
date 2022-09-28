import { Text, ImageBackground, TouchableOpacity, Dimensions, StatusBar, Platform, StyleSheet } from "react-native";
import React from "react";
import { Image, View } from "native-base";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IUser } from "../../@types";
import moment from "moment";

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;

const UserHome = () => {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View
        style={styles.container}
      >
        <View height={Platform.OS == "android" ? 8 : 50} />

        <View style={styles.logo}>
          <View>
            <Image source={require("../../../assets/logo/logo-LGBT.png")} alt="logo" w={logoW} h={logoH} />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <ImageBackground
            source={require("../../../assets/images/circle.png")}
            style={styles.imgcircle}
          />
          <ImageBackground
            source={require("../../../assets/images/avartar.png")}
            style={styles.imgavt}
          />
          <View style={styles.name}>
            <Text style={styles.textname}>Tr Vu, 30</Text>
            <ImageBackground source={require("../../../assets/images/star.png")} style={styles.imgstar} />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity>
            <ImageBackground source={require("../../../assets/images/setting.png")} style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground source={require("../../../assets/images/pen.png")} style={styles.img} />
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground source={require("../../../assets/images/guard.png")} style={styles.img} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserHome;

const styles = StyleSheet.create({
  container: {
      borderBottomLeftRadius: Dimensions.get("screen").width,
      borderBottomRightRadius: Dimensions.get("screen").width,
      width: "200%",
      paddingBottom: 35,
      position: "absolute",
      left: "-50%",
      backgroundColor: "#fff",
      shadowColor: "gray",
      shadowOffset: { width: 0, height: 16 },
      shadowOpacity: 0.4,
      alignItems: "center",
  },

  logo: { 
    width: "100%", 
    alignItems: "center", 
    marginBottom: 50 
  },

  imgcircle: { 
    width: 173, 
    height: 173, 
    position: "relative" 
  },

  imgavt: { 
    width: 137, 
    height: 137, 
    position: "absolute", 
    top: 18 
  },

  name: { 
    flexDirection: "row", 
    alignItems: "center", 
    marginVertical: 30,
  },

  textname: { 
    fontSize: 24, 
    fontWeight: "700", 
    color: "#F5344B", 
    marginRight: 10 
  },

  imgstar: { 
    width: 22, 
    height: 22 
  },

  img: { 
    width: 100, 
    height: 100 
  },


})
