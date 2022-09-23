import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { FormControl, Input, Stack, WarningOutlineIcon } from 'native-base';

export default function Signup() {
  return (
    <View>
      <View style={{ width: '100%', alignItems: 'center' }}>
        <Text style={{ fontSize: 32, lineHeight: 44.8, color: '#92379C', marginTop: 50, marginBottom: 50 }}>Đăng ký</Text>
      </View>

      <View style={{ alignItems: 'center' }}>
        <View style={{ width: 343 }} >
          <View style={{ marginBottom: 15 }}>
            <Input placeholder='Nhập tên tài khoản' style={{ height: 56, fontSize: 16 }} />
          </View>
          <View style={{ marginBottom: 15 }}>
            <Input placeholder='Nhập email của bạn' style={{ height: 56, fontSize: 16 }} />
            <Text style={{ color: '#707070', fontSize: 12, marginLeft: 5, marginTop: 5 }}>(vd: abc@gmail.com...)</Text>
          </View>
          <View style={{ marginBottom: 15 }}>
            <Input placeholder='Nhập số điện thoại của bạn' style={{ height: 56, fontSize: 16 }} />
            <Text style={{ color: '#707070', fontSize: 12, marginLeft: 5, marginTop: 5 }}>(vd: 0986382***)</Text>
          </View>
          <View style={{ marginBottom: 15 }}>
            <Input placeholder='Nhập mật khẩu của bạn' style={{ height: 56, fontSize: 16 }} />
            <Text style={{ color: '#707070', fontSize: 12, marginLeft: 5, marginTop: 5 }}>(vd: mật khẩu từ 6-8 ký tự, có một chữ in hoa, một ký tự đặc biệt)</Text>
          </View>
          <View style={{ marginBottom: 15 }}>
            <Input placeholder='Xác nhận mật khẩu của bạn' style={{ height: 56, fontSize: 16 }} />
            <Text style={{ color: '#707070', fontSize: 12, marginLeft: 5, marginTop: 5 }}>(vd: mật khẩu từ 6-8 ký tự, có một chữ in hoa, một ký tự đặc biệt)</Text>
          </View>
        </View>

        <TouchableOpacity style={{
          width: 342,
          borderWidth: 0,
          height: 56,
          borderRadius: 6,
          paddingHorizontal: 15,
          marginTop: 30,
          backgroundColor: '#F5344B',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{ color: 'white', }}>Đăng Nhập</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({})