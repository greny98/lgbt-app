import { EGender, IChat, IUser } from "./@types";
import { collection, setDoc, doc, addDoc, getDocs } from "firebase/firestore";
import { firestore } from "./firebase/config";

export const users: IUser[] = [
  {
    phone: "+84337676999",
    city: "Hanoi",
    country: "Vietnam",
    firstName: "Tuan",
    lastName: "Nguyen",
    gender: EGender.Male,
    hobbies: ["Billard", "Coding"],
  },
  {
    phone: "+84936511629",
    city: "Hanoi",
    country: "Vietnam",
    firstName: "Hiep",
    lastName: "Pham",
    gender: EGender.Female,
    hobbies: ["Travelling", "Sleeping"],
  },
  {
    phone: "+84988675723",
    city: "Hanoi",
    country: "Vietnam",
    firstName: "Cuong",
    lastName: "Nguyen",
    gender: EGender.Female,
    hobbies: ["Travelling", "Sleeping"],
  },
];

export const chats: IChat[] = [
  {
    from: users[0].phone,
    to: users[1].phone,
    text: "Hello, Where are you?",
    createdAt: new Date(),
  },
  {
    from: users[0].phone,
    to: users[1].phone,
    text: "I'm John",
    createdAt: new Date(),
  },
  {
    from: users[1].phone,
    to: users[0].phone,
    text: "Hello!!!",
    createdAt: new Date(),
  },
  {
    from: users[1].phone,
    to: users[0].phone,
    text: "Okeee",
    createdAt: new Date(),
  },
  {
    from: users[1].phone,
    to: users[2].phone,
    text: "Hello!!!",
    createdAt: new Date(),
  },
  {
    from: users[1].phone,
    to: users[2].phone,
    text: "Okeee",
    createdAt: new Date(),
  },
  {
    from: users[1].phone,
    to: users[2].phone,
    text: "Okeee",
    createdAt: new Date(),
  },
];

export const createUsers = async () => {
  const userRef = collection(firestore, "users");
  const promises = users.map((u) => setDoc(doc(userRef, u.phone), u));
  await Promise.all(promises);
};

export const createChats = async () => {
  const chatRef = collection(firestore, "chats");
  const data = await getDocs(chatRef);
  if (data.docs.length > 0) {
    return;
  }
  const promises0 = chats.map((chat) => addDoc(chatRef, chat));
  await Promise.all(promises0);
};
