import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";
import { Icon, Input } from "native-base";
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import { Feather } from '@expo/vector-icons';

export default function Login() {
  return (
    <View style={{backgroundColor: 'red', height: '100%'}}>
      <AntDesign name="left" size={30} color="white" style={{marginVertical: 50, marginHorizontal: 15}}/>
      <View style={{ width: "100%", alignItems: "center" }}>
        <View
          style={{
            marginTop: 120,
            marginBottom: 50,
          }}>
          <Text style={{ fontSize: 32, lineHeight: 44.8, color: "white" }}>
            LGBT
          </Text>
        </View>
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            width: 342,
            marginBottom: 15,
          }}
        >
          <Text style={{ width: "100%", textAlign: "center", color: "white"}}>
            Khi nhấn Tạo Tài Khoản hoặc Đăng Nhập, bạn đồng ý với Điều Khoản của
            chúng tôi. Tìm hiểu về cách chúng tôi xử lý dữ liệu của bạn trong
            Chính sách Quyền Riêng Tư và Chính sách Cookie của chúng tôi.
          </Text>
        </View>

        <View>
          <View style={{flexDirection: 'row', position: 'relative', }}>
            <AntDesign name="apple1" size={24} color="white" style={{position: 'absolute', zIndex: 10, top: 24, left: 20, fontSize: 24}} />
            <TouchableOpacity
            style={{
              width: 342,
              height: 56,
              borderRadius: 60,
              paddingHorizontal: 15,
              marginTop: 10,
              backgroundColor: "#F5344B",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <Text style={{ color: "white" }}>ĐĂNG NHẬP VỚI APPLE</Text>
          </TouchableOpacity>
          </View>
          
          <View style={{flexDirection: 'row', position: 'relative', }}>
            <Entypo name="facebook-with-circle" size={24} color="white" style={{position: 'absolute', zIndex: 10, top: 24, left: 20, fontSize: 24}}/>
            <TouchableOpacity
            style={{
              width: 342,
              height: 56,
              borderRadius: 60,
              paddingHorizontal: 15,
              marginTop: 10,
              backgroundColor: "#F5344B",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <Text style={{ color: "white" }}>ĐĂNG NHẬP VỚI FACEBOOK</Text>
          </TouchableOpacity>
          </View>

          <View style={{flexDirection: 'row', position: 'relative', }}>
            {/* <Entypo name="facebook-with-circle" size={24} /> */}
            <Feather name="message-circle" size={24} color="white" style={{position: 'absolute', zIndex: 10, top: 24, left: 20, fontSize: 24}}/>
            <TouchableOpacity
            style={{
              width: 342,
              height: 56,
              borderRadius: 60,
              paddingHorizontal: 15,
              marginTop: 10,
              backgroundColor: "#F5344B",
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: 'white',
            }}
          >
            <Text style={{ color: "white" }}>ĐĂNG NHẬP VỚI SỐ ĐIỆN THOẠI</Text>
          </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "center", marginTop: 15 }}>
        <View style={{ flexDirection: "row", marginBottom: 15 }}>
          <Text style={{ marginRight: 5, color: "white" }}>Sự cố khi</Text>
          <TouchableOpacity
            style={{ justifyContent: "center", alignItems: "center" }}
          >
            <Text style={{ color: "white", fontWeight: '700' }}>Đăng Nhập?</Text>
          </TouchableOpacity>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({});
