import React, { useEffect } from "react";
import { Text, View, Image, Dimensions, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "./Icon";
import styles, { DISLIKE_ACTIONS, FLASH_ACTIONS, LIKE_ACTIONS, STAR_ACTIONS, WHITE } from "../../assets/styles";

export enum ESwipeDirection {
  NONE,
  LEFT,
  RIGHT,
}

export type CardItemT = {
  description?: string;
  hasActions?: boolean;
  hasVariant?: boolean;
  image: any;
  isOnline?: boolean;
  matches?: string;
  name: string;
};

const CardItem = (props: CardItemT) => {
  const { description, hasActions, hasVariant, image, isOnline, matches, name } = props;
  // Custom styling
  const fullWidth = Dimensions.get("window").width;

  const imageStyle = [
    {
      borderRadius: 8,
      width: hasVariant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: hasVariant ? 170 : 350,
      margin: hasVariant ? 0 : 20,
    },
  ];

  const nameStyle = [
    {
      paddingTop: hasVariant ? 10 : 15,
      paddingBottom: hasVariant ? 5 : 7,
      color: "#363636",
      fontSize: hasVariant ? 15 : 30,
    },
  ];

  return (
    <View style={[styles.containerCardItem]}>
      {/* {swipeDirection == ESwipeDirection.LEFT && (
        <View
          style={[
            {
              borderColor: "red",
              right: 40,
              top: 40,
              transform: [{ rotate: "15deg" }],
            },
            stylesExt.tag,
          ]}
        >
          <Text style={{ fontSize: 28, color: "red" }}>NOPE</Text>
        </View>
      )} */}
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* MATCHES */}
      {matches && (
        <View style={styles.matchesCardItem}>
          <Text style={styles.matchesTextCardItem}>
            <Icon name="heart" color={WHITE} size={13} /> {matches}% Match!
          </Text>
        </View>
      )}

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* DESCRIPTION */}
      {description && <Text style={styles.descriptionCardItem}>{description}</Text>}

      {/* STATUS */}
      {!description && (
        <View style={styles.status}>
          <View style={isOnline ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{isOnline ? "Online" : "Offline"}</Text>
        </View>
      )}

      {/* ACTIONS */}
      {hasActions && (
        <View style={styles.actionsCardItem}>
          <TouchableOpacity style={styles.miniButton}>
            <Icon name="star" color={STAR_ACTIONS} size={14} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="heart" color={LIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Icon name="close" color={DISLIKE_ACTIONS} size={25} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.miniButton}>
            <Icon name="flash" color={FLASH_ACTIONS} size={14} />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default CardItem;

const stylesExt = StyleSheet.create({
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
