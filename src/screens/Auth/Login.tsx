import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { Icon, Input } from "native-base";


export default function Login() {
  return (
    <View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, lineHeight: 44.8, color: '#92379C', marginTop: 50, marginBottom: 100 }}>LGBT</Text>
      </View>

      <View style={{
        alignItems: 'center'
      }}>
        <View style={{
          width: 342,
          marginBottom: 15,
        }}>
          <Input
            style={{ height: 56 }}
            w={{
              base: "100%",
              md: "25%"
            }} InputLeftElement={<ImageBackground
              source={require('../../../assets/images/account.png')}
              style={{ width: 24, height: 24, marginLeft: 10 }}
            />} placeholder="Tên đăng nhập" />
        </View>
        <View style={{
          width: 342,
        }}>
          <Input
            style={{ height: 56 }}
            w={{
              base: "100%",
              md: "25%"
            }}
            InputLeftElement={
              <ImageBackground
                source={require('../../../assets/images/pass.png')}
                style={{ width: 24, height: 24, marginLeft: 10 }}
              />}

            // InputLeftElement={
            //   <ImageBackground
            //     source={require('../../../assets/images/eye-off.png')}
            //     style={{ width: 24, height: 24, marginLeft: 100 }}
            // /> }
            placeholder="Nhập mật khẩu"
          />

        </View>
        <TouchableOpacity style={{
          width: 342,
          borderWidth: 0,
          height: 56,
          borderRadius: 6,
          paddingHorizontal: 15,
          marginTop: 70,
          backgroundColor: '#F5344B',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ color: 'white', }}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', marginTop: 100 }}>
        <View style={{ flexDirection: 'row', marginBottom: 15 }}>
          <Text style={{ marginRight: 5 }}>
            Bạn chưa đăng ký?
          </Text>
          <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'red' }}>Đăng ký</Text>
          </TouchableOpacity>
        </View>

        <Text>Quên mật khẩu</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
