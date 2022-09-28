/**
 TODO: Pick Image and upload to FireStore - Hiep
 * ImagePicker: https://docs.expo.dev/versions/latest/sdk/imagepicker/
 * Upload: https://www.youtube.com/watch?v=YOAeBSCkArA
 */

import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  ActivityIndicator,
  Platform,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { storage } from "../firebase/config";
import { firebaseConfig } from "../firebase/config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

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

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  const uploadImage = async () => {
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
    <View style={styles.container}>
      <Image source={{ uri: image }} style={{ width: 300, height: 300 }} />
      <Button title="Choose picture" onPress={pickImage} />
      {!uploading ? (
        <Button title="Upload picture" onPress={uploadImage} />
      ) : (
        <ActivityIndicator size="large" color="#000" />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
