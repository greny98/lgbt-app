import { Text, ImageBackground, TouchableOpacity, Dimensions, StatusBar, Platform } from "react-native";
import React from "react";
import { Image, View } from "native-base";

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;

const UserHome = () => {
  return (
    <View>
      <StatusBar barStyle="dark-content" />
      <View
        style={{
          borderBottomLeftRadius: Dimensions.get("screen").width,
          borderBottomRightRadius: Dimensions.get("screen").width,
          width: "200%",
          paddingBottom: 20,
          position: "absolute",
          left: "-50%",
          backgroundColor: "#fff",
          shadowColor: "gray",
          shadowOffset: { width: 0, height: 16 },
          shadowOpacity: 0.4,
          alignItems: "center",
        }}
      >
        <View height={Platform.OS == "android" ? 8 : 50} />

        <View style={{ width: "100%", alignItems: "center" }}>
          <View style={{ marginBottom: 50 }}>
            <Image source={require("../../../assets/logo/logo-LGBT.png")} alt="logo" w={logoW} h={logoH} />
          </View>
        </View>

        <View style={{ alignItems: "center" }}>
          <ImageBackground
            source={require("../../../assets/images/circle.png")}
            style={{ width: 173, height: 173, position: "relative" }}
          />
          <ImageBackground
            source={require("../../../assets/images/avartar.png")}
            style={{ width: 137, height: 137, position: "absolute", top: 18 }}
          />
          <View style={{ flexDirection: "row", alignItems: "center", marginVertical: 30 }}>
            <Text style={{ fontSize: 24, fontWeight: "700", color: "#F5344B", marginRight: 10 }}>Tr Vu, 30</Text>
            <ImageBackground source={require("../../../assets/images/star.png")} style={{ width: 22, height: 22 }} />
          </View>
        </View>

        <View style={{ flexDirection: "row", justifyContent: "space-evenly" }}>
          <TouchableOpacity>
            <ImageBackground source={require("../../../assets/images/setting.png")} style={{ width: 70, height: 70 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground source={require("../../../assets/images/pen.png")} style={{ width: 100, height: 100 }} />
          </TouchableOpacity>

          <TouchableOpacity>
            <ImageBackground source={require("../../../assets/images/guard.png")} style={{ width: 70, height: 70 }} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default UserHome;
