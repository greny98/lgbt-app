import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React, { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { Checkbox,  } from "native-base";

const SexVerification = () => {
  const navigation = useNavigation<any>();
  const [isSelected, setSelection] = useState(false);
  const sexVerification = () => {
    navigation.navigate("ShowVerification");
  };
  return (
    <View>
      <View style={{ width: "100%" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign
            name="left"
            size={30}
            color="black"
            style={{ marginVertical: 45, marginHorizontal: 15 }}
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: "80%", marginHorizontal: "10%" }}>
        <Text style={{ fontSize: 26, fontWeight: "700" }}>Khuynh hướng tình dục của tôi là</Text>
        <Text>Chọn tối đa 3</Text>
      </View>

      <View style={{width: '100%', marginHorizontal: '10%'}}>
        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox" backgroundColor={'red'}>
          <Text style={styles.size}>Dị tính</Text>
        </Checkbox>
        
        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Đồng tính Nam</Text>
        </Checkbox>

        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Đồng tính nữ</Text>
        </Checkbox>

        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Song tính</Text>
        </Checkbox>

        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Vô tính</Text>
        </Checkbox>
        
        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Á tính</Text>
        </Checkbox>

        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Toàn tính</Text>
        </Checkbox>

        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Phi dị tính</Text>
        </Checkbox>

        <Checkbox mt={5}  value={"1"} colorScheme="green" accessibilityLabel="This is a dummy checkbox">
          <Text style={styles.size}>Chưa xác định rõ khuynh hướng</Text>
        </Checkbox>
      </View>
    </View>
  );
};

export default SexVerification;
const styles = StyleSheet.create({
  checkbox: {
    alignSelf: "center",
  },

  size: {
    fontSize: 16,
  }
});
