import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { Input } from 'native-base';
import { AntDesign } from '@expo/vector-icons';

const CodeVerification = () => {
  return (
    <View style={{height: '100%'}}>
    <AntDesign name="left" size={30} color="black" style={{marginVertical: 45, marginHorizontal: 15}}/>

    <View style={{width: '80%', marginHorizontal: '10%',}}>
      <Text style={{fontSize: 26, fontWeight: '700'}}>Mã của tôi là</Text>
      <View style={{flexDirection: 'row', width: '100%',}}>
          {/* <Text style={{borderBottomWidth: 1, borderColor: 'black', lineHeight: 46, marginRight: 15, width: '17%'}}>VN +84</Text> */}
          <Input placeholder='' variant="underlined" w='16.66666%' marginX={1}/>
          <Input placeholder='' variant="underlined" w='16.66666%' marginX={1}/>
          <Input placeholder='' variant="underlined" w='16.66666%' marginX={1}/>
          <Input placeholder='' variant="underlined" w='16.66666%' marginX={1}/>
          <Input placeholder='' variant="underlined" w='16.66666%' marginX={1}/>
          <Input placeholder='' variant="underlined" w='16.66666%' marginX={1}/>
      </View>
    </View>

    <View style={{alignItems: 'center'}}>
    <TouchableOpacity
          style={{
            width: 342,
            height: 56,
            borderRadius: 60,
            paddingHorizontal: 15,
            marginTop: 50,
            backgroundColor: "#F5344B",
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: 'white',
          }}
        >
          <Text style={{ color: "white" }}>TIẾP TỤC</Text>
        </TouchableOpacity>
    </View>
  </View>
  )
}

export default CodeVerification