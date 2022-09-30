import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import React, { useEffect } from "react";
import IconBottomTab from "./components/IconBottomTab";
import Main from "../Main";
import Home from "./screens/Home";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import AuthStack from "./navigations/AuthStack";
import Loading from "./screens/Loading";
import { fetchUser } from "./redux/user.reducer";
import Explore from "./screens/Explore";
import MessageStack from "./navigations/MessageStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "./redux/loading.reducer";
import UserHome from "./screens/User/UserHome";
import ProfileImages from "./screens/Auth/Signup/ProfileImages";
import UploadImage from "./components/UploadImage";

// Navigation
const Tab = createBottomTabNavigator();

interface TabOptions {
  route: RouteProp<ParamListBase>;
  navigation: any;
}

interface TabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

const options = (props: TabOptions): BottomTabNavigationOptions => {
  const { route } = props;
  const tabBarIcon = ({ focused }: TabBarIconProps) => {
    return <IconBottomTab name={route.name} focused={focused} />;
  };

  return {
    tabBarIcon,
    headerShown: false,
    tabBarLabelStyle: { fontSize: 12 },
    tabBarStyle: { paddingVertical: 4 },
    tabBarShowLabel: false,
  };
};

export default function Root() {
  const user = useSelector<RootState>((state) => state.user.user);
  const loading = useSelector<RootState>((state) => state.loading.loading);
  const dispatch = useDispatch<any>();

  useEffect(() => {
    (async () => {
      dispatch(setLoading());
      const phone = await AsyncStorage.getItem("phone");
      if (phone) {
        await dispatch(fetchUser(phone));
      }
      dispatch(removeLoading());
    })();
    return () => {};
  }, []);

  return (
    <>
      {loading && <Loading />}
      <NavigationContainer>
        {user ? (
          <Tab.Navigator initialRouteName="Home">
            <Tab.Screen name="Home" component={Home} options={options} />
            <Tab.Screen name="Grid" component={ProfileImages} options={options} />
            <Tab.Screen name="Message" component={MessageStack} options={options} />
            <Tab.Screen name="User" component={UserHome} options={options} />
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </>
  );
}
