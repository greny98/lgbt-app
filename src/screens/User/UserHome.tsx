import { Text, ImageBackground, TouchableOpacity, Dimensions, StatusBar, Platform, StyleSheet } from "react-native";
import React from "react";
import { Icon, Image, View } from "native-base";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { IUser } from "../../@types";
import { AntDesign } from "@expo/vector-icons";
import moment from "moment";
import { async } from "@firebase/util";
import Loading from "../Loading";
import { removeLoading, setLoading } from "../../redux/loading.reducer";
import { useDispatch } from "react-redux";
import { removeUser } from "../../redux/user.reducer";

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;

const UserHome = () => {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  const dispatch = useDispatch<any>();
  const loading = useSelector<RootState>((state) => state.loading.loading);
  const onLogout = async () => {
    dispatch(setLoading());
    await dispatch(removeUser());
    dispatch(removeLoading());
  };

  return (
    <>
      {loading && <Loading />}
      <View>
        <StatusBar barStyle="dark-content" />
        <View style={styles.container}>
          <View height={Platform.OS == "android" ? 8 : 50} />

          <View style={styles.logo}>
            <View>
              <Image source={require("../../../assets/logo/logo-LGBT.png")} alt="logo" w={logoW} h={logoH} />
            </View>
          </View>

          <View style={{ alignItems: "center" }}>
            <ImageBackground source={require("../../../assets/images/circle.png")} style={styles.imgcircle} />
            <ImageBackground source={require("../../../assets/images/avartar.png")} style={styles.imgavt} />
            <View style={styles.name}>
              <Text style={styles.textname}>{`${user.firstName} ${user.lastName}, ${moment(new Date()).diff(
                user.birthday,
                "year"
              )}`}</Text>
              <ImageBackground source={require("../../../assets/images/star.png")} style={styles.imgstar} />
            </View>
          </View>

          <View style={{ flexDirection: "row", justifyContent: "space-between", width: "35%" }}>
            <TouchableOpacity style={[styles.smallBtn, styles.shadow]}>
              <AntDesign name="setting" size={34} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.largeBtn, styles.shadow]}>
              <AntDesign name="edit" size={32} />
            </TouchableOpacity>

            <TouchableOpacity style={[styles.smallBtn, styles.shadow]} onPress={onLogout}>
              <AntDesign name="logout" size={30} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
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
    marginBottom: 50,
  },

  imgcircle: {
    width: 173,
    height: 173,
    position: "relative",
  },

  imgavt: {
    width: 137,
    height: 137,
    position: "absolute",
    top: 18,
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
    marginRight: 10,
  },

  imgstar: {
    width: 22,
    height: 22,
  },

  img: {
    width: 100,
    height: 100,
  },

  smallBtn: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  largeBtn: {
    width: 72,
    height: 72,
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  shadow: {
    borderColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    backgroundColor: "white",
    shadowColor: "rgba(0,0,0,0.5)",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 15,
    elevation: 2,
  },
});
