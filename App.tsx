import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base";
import { BottomTabNavigationOptions, createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer, ParamListBase, RouteProp } from "@react-navigation/native";
import IconBottomTab from "./src/components/IconBottomTab";
import Home from "./src/screens/Home";
import Grid from "./src/screens/Grid";
import Message from "./src/screens/Message/Message";
import User from "./src/screens/User";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

// extend the theme
export const theme = extendTheme({ config });
type MyThemeType = typeof theme;
declare module "native-base" {
  interface ICustomTheme extends MyThemeType {}
}

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
    tabBarShowLabel: false
  };
};

export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Home">
          <Tab.Screen name="Home" component={Home} options={options} />
          <Tab.Screen name="Grid" component={Grid} options={options} />
          <Tab.Screen name="Message" component={Message} options={options} />
          <Tab.Screen name="User" component={User} options={options} />
        </Tab.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
