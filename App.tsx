import React from "react";
import { NativeBaseProvider, extendTheme, View } from "native-base";
import { Provider } from "react-redux";
import store from "./src/redux/store";
import Root from "./src/Root";
import Post from "./src/components/Post";
import PostDetail from "./src/screens/PostDetail";

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
          <PostDetail/>
          {/* <Post
            img={require("./assets/images/avt.jpeg")}
            name="Martha Craig"
            user="@craig_love"
            time="12"
            content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
            hashtag="#TellMeAboutYou"
            img_content={require("./assets/images/content.png")}
            comment="28"
            retweet="5"
            heart="21"
          />
          <Post
            img={require("./assets/images/avt.jpeg")}
            name="Martha Craig"
            user="@craig_love"
            time="12"
            content="UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?"
            hashtag="#TellMeAboutYou"
            img_content={require("./assets/images/content.png")}
            comment="28"
            retweet="5"
            heart="21"
          /> */}
        </View>
      </NativeBaseProvider>
    </Provider>
  );
}
