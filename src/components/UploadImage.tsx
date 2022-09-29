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
  TouchableOpacity
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { AntDesign } from "@expo/vector-icons";
import { relativeTimeRounding } from "moment";

export default function UploadImage() {
  const [image, setImage] = useState("");
  const [uploading, setUploading] = useState(false);

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

  // const pickImage = async () => {
  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1,
  //   });

  //   if (!result.cancelled) {
  //     setImage(result.uri);
  //   }
  // };

  const uploadImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }

    const metadata = {
      contentType: "image/jpeg",
    };
    let imgName = image.substring(image.lastIndexOf("/") + 1);
    const storageRef = ref(storage, `images/${imgName}`);
    const img = await fetch(image);
    const blob = await img.blob();
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
        }
      },
      (error) => {
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
          console.log("File available at", downloadURL);
        });
      }
    );
  };

  return (
    <View style={{ height: 170, width: 140}}>
      <View style={styles.container}>
        <Image source={{ uri: image }} style={{ width: 120, height: 150, borderRadius: 10, zIndex: 0 }} />
        {!uploading ? (
          <TouchableOpacity style={styles.btn} onPress={uploadImage}>
            <AntDesign
              // style={styles.plus}
              name="plus"
              size={25}
              color="white"
            />
          </TouchableOpacity>
        ) : (
          <ActivityIndicator size="large" color="#000" />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    height: 150,
    backgroundColor: "#ebecf0",
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#e0e4e9",
    borderStyle: "dashed",
  },
  btn: {
    position: 'absolute',
    bottom: -15,
    right: -15,
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#F5344B",
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 3
  },
});
