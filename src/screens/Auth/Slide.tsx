import {
  Dimensions,
  ImageSourcePropType,
  StyleSheet,
  View,
  ViewProps,
} from "react-native";
import React, { useState } from "react";
import Carousel from "react-native-snap-carousel";
import { Box, HStack, Image } from "native-base";

export interface SlideProps extends ViewProps {
  data: ImageSourcePropType[];
  showNum?: boolean;
}

const screenWidth = Dimensions.get("screen").width;
const screenHeight = Dimensions.get("screen").height;


export default function Slide(props: SlideProps) {
  const { data, showNum, style, ...rest } = props;
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <View style={[styles.memberImageWrapper, style]} {...rest}>
      <Carousel
        data={data}
        layout={'tinder'}
        // layoutCardOffset={9}
        renderItem={({ item, index }) => (
          <Image source={item} key={ `item${index}`} height={screenHeight*0.75} />
        )}
        itemWidth={Math.round(screenWidth)}
        sliderWidth={screenWidth}
      />
      {/* {showNum && (
        <HStack justifyContent="space-around" width={100}>
          {data.map((_, i) => (
            <Box
              width={3}
              height={3}
              marginTop={2}
              borderRadius={100}
              bg={i == slideIndex ? "#3D7944" : "gray.600"}
              key={i}
            />
          ))}
        </HStack>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  memberImageWrapper: {
    zIndex: 1,
    width: "100%",
    alignItems: "center",
  },
});
