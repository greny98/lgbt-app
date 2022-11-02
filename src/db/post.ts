import { ImageSourcePropType } from "react-native";

export interface PostProps {
  img: ImageSourcePropType;
  name: string;
  user: string;
  time: string;
  content: string;
  hashtag: string;
  img_content: ImageSourcePropType;
  comment: string;
  retweet: string;
  heart: string;
}

export const postData: PostProps[] = {
  img:{require("../assets/images/avt.jpeg")},
  name:"Martha Craig",
  user:"@craig_love",
  time:"12",
  content:"UXR/UX: You can only bring one item to a remote island to assist your research of native use of tools and usability. What do you bring?",
  hashtag:"#TellMeAboutYou",
  img_content:{require("./assets/images/content.png")},
  comment:"28",
  retweet:"5",
  heart:"21",
};
