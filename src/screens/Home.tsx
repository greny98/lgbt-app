import { StyleSheet, Dimensions, StatusBar, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, View } from "native-base";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { firestore } from "../firebase/config";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { EMatchingStatus, IMatching, IUser } from "../@types";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../redux/loading.reducer";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem, { ESwipeDirection } from "../components/CardItem";
import { useNavigation } from "@react-navigation/native";
import Loading from "./Loading";
import moment from "moment";
import { setNewMatching } from "../redux/matching.reducer";
import Post from "../components/Post";

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;
const matchingRef = collection(firestore, "matchings");
const chatRef = collection(firestore, "chats");

const HomeVerification = () => {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const navigation = useNavigation<any>();
  const loading = useSelector<RootState>((state) => state.loading.loading);
  const [otherUsers, setOtherUsers] = useState<IUser[]>([]);
  const dispatch = useDispatch<any>();
  const [swipeDirection, setSwipeDirection] = useState<ESwipeDirection>(
    ESwipeDirection.NONE
  );

  const loadUsers = async () => {
    dispatch(setLoading());
    const userRef = collection(firestore, "users");
    const qU = query(userRef, where("phone", "!=", user.phone));
    const qM = query(matchingRef, where("from", "==", user.phone));
    let users = (await getDocs(qU)).docs.map((doc) => {
      const data = doc.data() as IUser;
      console.log("====== data", data.birthday);
      return { ...data, birthday: (data.birthday as any).toDate() };
    });
    const likedDict: { [key: string]: boolean } = {};

    (await getDocs(qM)).docs.forEach((doc) => {
      const match = doc.data() as IMatching;
      likedDict[match.to] = true;
    });
    const filtered: IUser[] = [];
    users.forEach((u) => {
      if (!likedDict[u.phone]) filtered.push(u);
    });

    setOtherUsers(filtered);
    dispatch(removeLoading());
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", () => {
      loadUsers();
    });
    // Return the function to unsubscribe from the event so it gets removed on unmount
    return unsubscribe;
  }, [navigation]);

  useEffect(() => {
    loadUsers();
    return () => {};
  }, []);

  const onSwipe = (corrX: number) => {
    if (corrX < -50) {
      setSwipeDirection(ESwipeDirection.LEFT);
    } else if (corrX > 50) {
      setSwipeDirection(ESwipeDirection.RIGHT);
    }
  };

  const onSwipedLeft = async (i: number) => {
    const fr = otherUsers[i];
    const qToU = query(
      matchingRef,
      where("from", "==", fr.phone),
      where("to", "==", user.phone)
    );
    const toU = (await getDocs(qToU)).docs[0];
    if (toU) {
      // Match
      await deleteDoc(doc(matchingRef, toU.id));
    }
  };

  const onSwipedRight = async (i: number) => {
    const fr = otherUsers[i];
    const qToU = query(
      matchingRef,
      where("from", "==", fr.phone),
      where("to", "==", user.phone)
    );
    const toU = (await getDocs(qToU)).docs[0];
    if (toU) {
      // Match
      await setDoc(doc(matchingRef, toU.id), {
        from: fr.phone,
        to: user.phone,
        status: EMatchingStatus.ACCEPTED,
      });
      await addDoc(matchingRef, {
        from: user.phone,
        to: fr.phone,
        status: EMatchingStatus.ACCEPTED,
      });
      await addDoc(chatRef, {
        createdAt: new Date(),
        from: user.phone,
        to: fr.phone,
        text: "Xin chào, chúng mình vừa match nhau!",
      });
      dispatch(setNewMatching());
    } else {
      await addDoc(matchingRef, {
        from: user.phone,
        to: fr.phone,
        status: EMatchingStatus.WAIT,
      });
    }
  };

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <StatusBar
        barStyle={Platform.OS === "android" ? "light-content" : "dark-content"}
      />
      <View height={Platform.OS == "android" ? 7 : 50} />
      <View style={styles.logo}>
        <View>
          <Image
            source={require("../../assets/logo/logo-LGBT.png")}
            alt="logo"
            w={logoW}
            h={logoH}
            zIndex={100}
            backgroundColor={"red"}
            top={0}
          />
        </View>
      </View>
      <ScrollView style={{ flex: 1 }}>
        <Post
          img={require("../../assets/images/avt.jpeg")}
          name="Martha Craig"
          user="@craig_love"
          time="12"
          content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
          hashtag="#TellMeAboutYou"
          img_content={require("../../assets/images/content.png")}
          comment="28"
          retweet="5"
          heart="21"
        />
        <Post
          img={require("../../assets/images/avt.jpeg")}
          name="Martha Craig"
          user="@craig_love"
          time="12"
          content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
          hashtag="#TellMeAboutYou"
          img_content={require("../../assets/images/content.png")}
          comment="28"
          retweet="5"
          heart="21"
        />
        <Post
          img={require("../../assets/images/avt.jpeg")}
          name="Martha Craig"
          user="@craig_love"
          time="12"
          content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
          hashtag="#TellMeAboutYou"
          img_content={require("../../assets/images/content.png")}
          comment="28"
          retweet="5"
          heart="21"
        />
        <Post
          img={require("../../assets/images/avt.jpeg")}
          name="Martha Craig"
          user="@craig_love"
          time="12"
          content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
          hashtag="#TellMeAboutYou"
          img_content={require("../../assets/images/content.png")}
          comment="28"
          retweet="5"
          heart="21"
        />
      </ScrollView>
    </View>
  );
};

export default HomeVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // paddingHorizontal: 20,
  },

  logo: {
    width: "100%",
    alignItems: "center",
    marginBottom: 32,
  },

  information: {
    position: "absolute",
    bottom: 20,
    width: "90%",
    zIndex: 10,
  },

  name: {
    color: "white",
    fontSize: 24,
    marginTop: 10,
  },

  form: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  icon: {
    marginRight: 5,
  },

  action: {
    color: "white",
    fontSize: 15,
    flexDirection: "column",
  },

  border: {
    height: 50,
    width: 50,
    borderRadius: 60,
    borderColor: "yellow",
    borderWidth: 1,
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },

  enviromento: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 5,
  },

  info: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tag: {
    position: "absolute",
    width: 150,
    height: 75,
    zIndex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 16,
    borderWidth: 4,
    opacity: 0.6,
  },
});
