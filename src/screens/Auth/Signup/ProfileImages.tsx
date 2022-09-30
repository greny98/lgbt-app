/**
 TODO: Upload Image when signup - Hiep
 */
import { View, Text, TouchableOpacity, StatusBar, StyleSheet } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UploadImage from "../../../components/UploadImage";
import Loading from "../../Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { IUser } from "../../../@types";

const ProfileImages = () => {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  const navigation = useNavigation<any>();
  const loading = useSelector<RootState, boolean>((state) => state.loading.loading);
  return (
    <>
      {loading && <Loading />}

      <View style={{ height: "100%", alignItems: "center" }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: "100%" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="left" size={30} color="black" style={{ marginTop: 45, marginHorizontal: 15 }} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: "80%",
            marginHorizontal: "10%",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 45, fontWeight: "700" }}>Thêm ảnh</Text>
          <Text style={{ fontSize: 15, color: "gray", marginVertical: 15 }}>Thêm ít nhất 2 ảnh để tiếp tục</Text>
        </View>
        <View style={styles.box_image}>
          {user.images.map((x, i) => {
            return <UploadImage key={x + String(i)} name={x} index={i} />;
          })}
        </View>

        <View style={{ alignItems: "center" }}>
          <TouchableOpacity
            // onPress={emailVerification}
            style={{
              width: 342,
              height: 56,
              borderRadius: 60,
              paddingHorizontal: 15,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "#000",
              marginTop: 50,
            }}
          >
            <Text style={{ color: "#000", fontWeight: "700" }}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default ProfileImages;

const styles = StyleSheet.create({
  box_image: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "95%",
    height: 350,
  },
});
