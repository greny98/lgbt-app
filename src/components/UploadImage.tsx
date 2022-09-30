/**
 TODO: Pick Image and upload to FireStore - Hiep
 * ImagePicker: https://docs.expo.dev/versions/latest/sdk/imagepicker/
 * Upload: https://www.youtube.com/watch?v=YOAeBSCkArA
 */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  ActivityIndicator,
  Platform,
  TouchableOpacity,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestore } from "../firebase/config";
import { storage } from "../firebase/config";
import { AntDesign } from "@expo/vector-icons";
import Loading from "../screens/Loading";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import {
  ILoadingState,
  removeLoading,
  setLoading,
} from "../redux/loading.reducer";
import { useDispatch } from "react-redux";
import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

export default function UploadImage(props: any) {
  const { name } = props;
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      if (Platform.OS !== "web") {
        const { status } = await ImagePicker.requestCameraPermissionsAsync();
        if (status !== "granted") {
          alert("Sorry, we need camera roll permisssions to make this work");
        }
      }
    })();
  }, []);

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [3, 4],
      quality: 0.5,
    });
    if (result.cancelled) {
      console.log(result);
      return;
    }

    // const metadata = {
    //   contentType: "image/jpeg",
    // };
    console.log("result.uri: ", result.uri);

    let imgName = result.uri.substring(result.uri.lastIndexOf("/") + 1);
    const storageRef = ref(storage, `img${name}.jpg`);
    dispatch(setLoading());
    const manipResult = await manipulateAsync(
      result.uri,
      [
        {
          resize: { height: 512, width: 512 },
        },
      ],
      {
        compress: 1,
        format: SaveFormat.PNG,
      }
    );

    const img = await fetch(manipResult.uri);
    const blob = await img.blob();

    const uploadTask = uploadBytesResumable(storageRef, blob);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        console.log(snapshot.state);

        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          case "success":
            console.log("Upload is success");
            break;
        }
      },
      (error) => {
        console.log("ERRRR", error);
        dispatch(removeLoading());

        switch (error.code) {
          case "storage/unauthorized":
            break;
          case "storage/canceled":
            break;
          case "storage/unknown":
            break;
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImage(downloadURL);
          dispatch(removeLoading());
        });
      }
    );
  };

  return (
    <>
      <View style={{padding: 8}}>
        <View style={styles.container}>
          {!!image && (
            <Image
              source={{ uri: image }}
              style={{ width: 120, height: 160, borderRadius: 10, zIndex: 0 }}
            />
          )}
          {!uploading ? (
            <TouchableOpacity style={styles.btn} onPress={uploadImage}>
              <AntDesign name="plus" size={25} color="#000" />
            </TouchableOpacity>
          ) : (
            <ActivityIndicator size="large" color="#000" />
          )}
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 160,
    backgroundColor: "#ebecf0",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#e0e4e9",
    borderStyle: "dashed",
  },
  btn: {
    position: "absolute",
    bottom: -15,
    right: -15,
    width: 30,
    height: 30,
    borderRadius: 20,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: "center",
    justifyContent: "center",
    zIndex: 3,
  },
});
