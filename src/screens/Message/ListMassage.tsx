/**
 TODO: Chat History - Tuan
 */
import { Platform, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import MessageItem from "../../components/MessageItem";
import { Heading, HStack, Image, ScrollView, View } from "native-base";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { IChat, IUser } from "../../@types";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { createChats, createUsers } from "../../mockup";

type ChatItem = {
  name: string;
  createdAt: Date;
  text: string;
};
export default function ListMassage() {
  const [items, setItems] = useState<ChatItem[]>([]);
  const navigation = useNavigation<any>();

  const user = useSelector<RootState, IUser>((state) => state.user.user!);

  const goChat = (fr: string) => () => {
    navigation.navigate("MessageScreen", { fr });
  };

  const onGoProfile = () => navigation.navigate("User");

  useEffect(() => {
    const loadHistory = async () => {
      // (async () => {
      //   await createUsers();
      //   await createChats();
      // })();
      const messRef = collection(firestore, "chats");
      const userToFrQ = query(messRef, where("from", "==", user.phone));
      const frToUserQ = query(messRef, where("to", "==", user.phone));

      try {
        const [userToFrData, frToUserData] = await Promise.all([getDocs(userToFrQ), getDocs(frToUserQ)]);
        const itemDicts: { [key: string]: ChatItem } = {};
        userToFrData.forEach((mess) => {
          const data = mess.data() as IChat;
          if (!itemDicts[data.to] || moment((data.createdAt as any).toDate()).isAfter(itemDicts[data.to].createdAt)) {
            itemDicts[data.to] = {
              name: data.to,
              createdAt: (data.createdAt as any).toDate(),
              text: data.text,
            };
          }
        });
        frToUserData.forEach((mess) => {
          const data = mess.data() as IChat;
          if (
            !itemDicts[data.from] ||
            moment((data.createdAt as any).toDate()).isAfter(itemDicts[data.from].createdAt)
          ) {
            itemDicts[data.from] = {
              name: data.from,
              createdAt: (data.createdAt as any).toDate(),
              text: data.text,
            };
          }
        });
        const newItems = Object.values(itemDicts).map((v) => v);
        newItems.sort((i1, i2) => Number(i2.createdAt) - Number(i1.createdAt));
        setItems(newItems);
      } catch (err) {
        console.log(err);
      }
    };
    loadHistory();
    return () => {};
  }, []);

  return (
    <View style={{ flex: 1, paddingHorizontal: 8 }}>
      <StatusBar barStyle="dark-content" />
      <View height={Platform.OS == "android" ? 8 : 44} />
      <HStack height={70} alignItems="center">
        <TouchableOpacity onPress={onGoProfile}>
          <Image alt="user" source={require("../../../assets/images/avartar.png")} style={{ width: 50, height: 50 }} />
        </TouchableOpacity>
        <Heading flex={1} textAlign="center">
          Messages
        </Heading>
        <View style={{ width: 50 }} />
      </HStack>
      <ScrollView flex="1" paddingY={4} paddingX={2}>
        {items.map((item) => (
          <MessageItem
            createdAt={item.createdAt}
            key={item.createdAt.toISOString() + item.name}
            avt={require("../../../assets/images/avartar.png")}
            name={item.name}
            content={item.text}
            onPress={goChat(item.name)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({});
