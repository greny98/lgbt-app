/**
 TODO: Upload Image when signup - Hiep
 */
import {
  View,
  Text,
  TouchableOpacity,
  StatusBar,
  StyleSheet,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import UploadImage from "../../../components/UploadImage";
import Loading from "../../Loading";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const ProfileImages = () => {
  const navigation = useNavigation<any>();
  const loading = useSelector<RootState, boolean>(
    (state) => state.loading.loading
  );
  return (
    <>
      {loading && <Loading />}

      <View style={{ height: "100%" }}>
        <StatusBar barStyle="dark-content" />
        <View style={{ width: "100%" }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign
              name="left"
              size={30}
              color="black"
              style={{ marginTop: 45, marginHorizontal: 15 }}
            />
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
          <Text style={{ fontSize: 15, color: "gray", marginVertical: 15 }}>
            Thêm ít nhất 2 ảnh để tiếp tục
          </Text>
        </View>
        <View style={styles.box_image}>
          {[0, 1, 2, 3, 4, 5].map((x) => {
            return <UploadImage key={x} name={"img" + String(x)} />;
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
              backgroundColor: "#F5344B",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "white",
              marginTop: 50,
            }}
          >
            <Text style={{ color: "white", fontWeight: "700" }}>TIẾP TỤC</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};
export default ProfileImages;

const styles = StyleSheet.create({
  box_image: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row",
    flexWrap: 'wrap',
    width: '100%',
    height: 350,
  },
});
