import React from "react";
import { NativeBaseProvider, extendTheme, View } from "native-base";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Root from "./src/Root";
import Post from "./src/components/Post";

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

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {/* <Root /> */}
        <View style={{ flex: 1, paddingTop: 100 }}>
          <Post />
        </View>
      </NativeBaseProvider>
    </Provider>
  );
}
