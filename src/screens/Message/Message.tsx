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
import { StyleSheet } from "react-native";
import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { createChats, createUsers, users } from "../../mockup";
import { collection, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../../firebase/config";
import { chatToMess } from "../../utils";
import { IChat } from "../../@types";
import { useRoute } from "@react-navigation/native";

export default function Message() {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const route = useRoute<any>();
  const fr = route.params.fr;
  useEffect(() => {
    const loadMess = async () => {
      (async () => {
        await createUsers();
        await createChats();
      })();
      const messRef = collection(firestore, "chats");
      const userToFrQ = query(messRef, where("from", "==", users[0].phone), where("to", "==", fr));
      const frToUserQ = query(messRef, where("from", "==", fr), where("to", "==", users[0].phone));
      const [userToFrData, frToUserData] = await Promise.all([getDocs(userToFrQ), getDocs(frToUserQ)]);
      let mess = userToFrData.docs.map((doc) => chatToMess(doc.data() as IChat, doc.id));
      mess = mess.concat(frToUserData.docs.map((doc) => chatToMess(doc.data() as IChat, doc.id)));
      setMessages(mess);
    };
    loadMess();
  }, []);

  console.log(messages);

  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) => GiftedChat.append(previousMessages, messages));
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: users[0].phone,
      }}
    />
  );
}

const styles = StyleSheet.create({});
