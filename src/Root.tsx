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
import { EFetchStatus, fetchUser } from "./redux/user.reducer";
import Explore from "./screens/Explore";
import { createChats, createUsers, users } from "./mockup";
import MessageStack from "./navigations/MessageStack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import { removeLoading, setLoading } from "./redux/loading.reducer";

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
(async () => {
  await createUsers();
  await createChats();
})();
export default function Root() {
  const user = useSelector<RootState>((state) => state.user.user);
  const status = useSelector<RootState>((state) => state.user.status);
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
      {(loading || status === EFetchStatus.PENDING) && <Loading />}
      <NavigationContainer>
        {user ? (
          <Tab.Navigator initialRouteName="Message">
            <Tab.Screen name="Home" component={Home} options={options} />
            <Tab.Screen name="Grid" component={Explore} options={options} />
            <Tab.Screen
              name="Message"
              component={MessageStack}
              options={options}
              initialParams={{ fr: users[1].phone }}
            />
            <Tab.Screen name="User" component={Main} options={options} />
          </Tab.Navigator>
        ) : (
          <AuthStack />
        )}
      </NavigationContainer>
    </>
  );
}
