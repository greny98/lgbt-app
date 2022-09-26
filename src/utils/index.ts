import { IMessage } from "react-native-gifted-chat";
import { IChat } from "../@types";

export const chatToMess = (chat: IChat, messId: string): IMessage => {
  return {
    _id: messId,
    user: { _id: chat.from },
    createdAt: new Date((chat.createdAt as any).toDate()),
    text: chat.text,
  };
};
