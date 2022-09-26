/**
 TODO: Chat Screen - Tuan
  chats: {
    from: "phone-A",
    to: "phone-B",
    text: "content",
    createdAt: Date
  }
 * Lib: react-native-gifted-chat
 */
import { Platform, StatusBar, StyleSheet, TouchableOpacity } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { Heading, HStack, Image, View } from "native-base";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { addDoc, collection, doc, getDoc, getDocs, onSnapshot, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { chatToMess } from "../../utils";
import { IChat, IUser } from "../../@types";
import { useNavigation, useRoute } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

const messRef = collection(firestore, "chats");
const userRef = collection(firestore, "users");

export default function Message() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [userToFr, setUserToFr] = useState<IMessage[]>([]);
  const [frToUser, setFrToUser] = useState<IMessage[]>([]);
  const [friend, setFriend] = useState<IUser | null>(null);
  const currentUser = useSelector<RootState, IUser>((state) => state.user.user!);
  const route = useRoute<any>();
  const navigation = useNavigation();
  const fr = route.params.fr;

  useEffect(() => {
    (async () => {
      const data = await getDoc(doc(userRef, fr));
      const user = data.data() as IUser;
      setFriend(user);
    })();
    const userToFrQ = query(messRef, where("from", "==", currentUser.phone), where("to", "==", fr));
    const frToUserQ = query(messRef, where("from", "==", fr), where("to", "==", currentUser.phone));
    const unsub1 = onSnapshot(userToFrQ, (querySnapshot) =>
      setUserToFr(querySnapshot.docs.map((doc) => chatToMess(doc.data() as IChat, doc.id)))
    );
    const unsub2 = onSnapshot(frToUserQ, (querySnapshot) =>
      setFrToUser(querySnapshot.docs.map((doc) => chatToMess(doc.data() as IChat, doc.id)))
    );

    return () => {
      unsub1();
      unsub2();
    };
  }, []);

  useEffect(() => {
    let mess = userToFr.concat(frToUser);
    mess = mess.sort((m1, m2) => Number(m2.createdAt) - Number(m1.createdAt));
    setMessages(mess);
  }, [userToFr, frToUser]);

  const onSend = useCallback(async (messages: IMessage[] = []) => {
    try {
      const { user, createdAt, text } = messages[0];
      let from, to;
      if (user._id === currentUser.phone) {
        from = user._id;
        to = fr;
      } else {
        from = fr;
        to = currentUser.phone;
      }
      await addDoc(messRef, { createdAt, from, to, text });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      {Platform.OS == "android" && <StatusBar barStyle="light-content" />}
      <View height={Platform.OS == "android" ? 8 : 44} />
      <HStack justifyContent="space-between" height={70} alignItems="center" paddingX={4}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={30} color="black" style={{}} />
        </TouchableOpacity>
        <Heading flex={1} textAlign="center">
          {`${friend?.firstName} ${friend?.lastName}`}
        </Heading>
        <Image alt="user" source={require("../../../assets/images/avartar.png")} style={{ width: 50, height: 50 }} />
      </HStack>
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: currentUser.phone,
        }}
      />
    </>
  );
}

const styles = StyleSheet.create({});
