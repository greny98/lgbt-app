import { Text, StyleSheet, TouchableOpacity, Dimensions, StatusBar, Platform } from "react-native";
import React, { useEffect, useState } from "react";
import Slide from "./Auth/Slide";
import { Image, View } from "native-base";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { firestore } from "../firebase/config";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IUser } from "../@types";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "../redux/loading.reducer";
import CardStack, { Card } from "react-native-card-stack-swiper";
import CardItem from "../components/CardItem";
import { useNavigation } from "@react-navigation/native";
import Loading from "./Loading";

const data = [
  require("../../assets/ltkh.png"),
  require("../../assets/ltkh.png"),
  require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
  // require("../../assets/ltkh.png"),
];

const logoW = Dimensions.get("screen").width * 0.5;
const logoH = (994 / 2596) * logoW;

const HomeVerification = () => {
  const user = useSelector<RootState, IUser>((state) => state.user.user!);
  const [swiper, setSwiper] = useState<CardStack | null>(null);
  const navigation = useNavigation<any>();
  const loading = useSelector<RootState>((state) => state.loading.loading);

  const [otherUsers, setOtherUsers] = useState<IUser[]>([]);
  const dispatch = useDispatch<any>();
  const loadUsers = async () => {
    dispatch(setLoading());
    const userRef = collection(firestore, "users");
    const q = query(userRef, where("phone", "!=", user.phone));
    const users = (await getDocs(q)).docs.map((doc) => doc.data() as IUser);
    setOtherUsers(users);
    console.log(users);

    dispatch(removeLoading());
  };
  React.useEffect(() => {
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

  return loading ? (
    <Loading />
  ) : (
    <View style={styles.container}>
      <StatusBar barStyle={Platform.OS === "android" ? "light-content" : "dark-content"} />
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
            // position={'absolute'}
            top={0}
          />
        </View>
      </View>

      {/* <Slide data={data} /> */}
      <CardStack
        loop
        verticalSwipe={false}
        renderNoMoreCards={() => null}
        ref={(newSwiper): void => setSwiper(newSwiper)}
      >
        {otherUsers.map((item) => (
          <Card key={item.phone}>
            <CardItem
              hasActions
              image={require("../../assets/ltkh.png")}
              name={`${item.firstName} ${item.lastName}`}
              // description={item.description}
              // matches={item.match}
            />
          </Card>
        ))}
      </CardStack>
      {/* <View style={styles.information}>
        <View style={styles.info}>
          <View>
            <Text style={styles.name}>Lê Thị Khánh Huyền 19</Text>
            <View style={styles.form}>
              <Entypo name="dot-single" size={24} color="white" style={styles.icon} />
              <Text style={styles.action}>Có hoạt động gần đây</Text>
            </View>
            <View style={styles.enviromento}>
              <AntDesign name="enviromento" size={24} color="white" style={styles.icon} />
              <Text style={styles.action}>cách xa 3 km</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}></View>
          <View style={{ marginTop: 20 }}>
            <AntDesign name="exclamationcircle" size={30} color="white" />
          </View>
        </View>

        <View style={styles.button}>
          <TouchableOpacity style={styles.border}>
            <Fontisto name="arrow-return-left" size={24} color="yellow" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.border}>
            <AntDesign name="close" size={24} color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            <MaterialIcons name="star" size={24} color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            <AntDesign name="heart" size={24} color="yellow" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.border}>
            <MaterialCommunityIcons name="lightning-bolt" size={24} color="yellow" />
          </TouchableOpacity>
        </View>
      </View> */}
    </View>
  );
};

export default HomeVerification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
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
});
