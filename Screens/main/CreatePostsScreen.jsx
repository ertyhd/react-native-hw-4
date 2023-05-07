import React, { useState, useEffect, useCallback } from "react";
import {
  Image,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import { useFonts } from "expo-font";
import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as ImagePicker from "expo-image-picker";

import * as SplashScreen from "expo-splash-screen";

const CreatePostsScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../../assets/fonts/Roboto-Regular.ttf"),
  });

  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState(null);
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [photoName, setPhotoName] = useState("");
  const [regionName, setRegionName] = useState("");
  const [newPhoto, setNewPhoto] = useState(null);

  const takePhoto = async () => {
    const photo = await camera.takePictureAsync();

    setPhoto(photo.uri);
  };

  const deletePhoto = () => {
    setPhoto(null);
    setPhotoName("");
    setRegionName("");
  };

  const sendPhoto = async () => {
    if (!photo) {
      console.log("No photo");
      return;
    }
    let locationRes = await Location.getCurrentPositionAsync({});
    navigation.navigate("Posts", {
      photo,
      photoName,
      regionName,
      location: {
        latitude: locationRes.coords.latitude,
        longitude: locationRes.coords.longitude,
      },
    });
    deletePhoto();
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  // const onKeyPressDown = (e) => {
  //   // setIsShowKeyboard(false);
  //   // Keyboard.dismiss();
  //   console.log("keyPressed", e);
  // };

  const downloadPhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      if (!result.canceled) {
        setPhoto(result.assets[0].uri);
        setNewPhoto(result.assets[0].uri);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <KeyboardAvoidingView
        style={style.container}
        behavior={Platform.OS === "ios" ? "padding" : ""}
        onLayout={onLayoutRootView}
      >
        <View>
          <View style={style.cameraView}>
            {photo && (
              <View style={style.takePhotoContainer}>
                <Image source={{ uri: photo }} style={style.takePhoto} />
              </View>
            )}
            <Camera style={style.camera} ref={setCamera}>
              <TouchableOpacity onPress={takePhoto}>
                <Image
                  source={require("../../assets/svg/snap.png")}
                  style={style.snap}
                />
              </TouchableOpacity>
            </Camera>
          </View>
          <TouchableOpacity style={style.inputLoadBtn} onPress={downloadPhoto}>
            <Text style={style.textInput}>Load photo</Text>
          </TouchableOpacity>
          <View style={isShowKeyboard ? style.keyboardShow : ""}>
            <View style={style.textInputKeyboardView}>
              <TextInput
                style={style.textInputKeyboard}
                placeholder="Photo name"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  // Keyboard.isVisible();
                }}
                onChangeText={(value) => {
                  setPhotoName(value);
                }}
                onSubmitEditing={keyboardHide}
                value={photoName}
              ></TextInput>
            </View>
            <View style={style.textInputKeyboardView}>
              <TextInput
                style={style.textInputKeyboard}
                placeholder="Region"
                onFocus={() => {
                  setIsShowKeyboard(true);
                  // Keyboard.isVisible();
                }}
                onChangeText={(value) => {
                  setRegionName(value);
                }}
                onSubmitEditing={keyboardHide}
                value={regionName}
              ></TextInput>
            </View>
          </View>
          <TouchableOpacity
            style={{
              ...style.publicateBtn,
              backgroundColor: photo && photoName ? "#FF6C00" : "#F6F6F6",
            }}
            onPress={sendPhoto}
          >
            <Text
              style={{
                ...style.publicateBtnText,
                color: photo && photoName ? "#fff" : "#BDBDBD",
              }}
            >
              Publicate
            </Text>
          </TouchableOpacity>
        </View>
        <View style={style.trashBtnContainer}>
          <TouchableOpacity onPress={deletePhoto}>
            <Image
              source={require("../../assets/png/trash.png")}
              style={style.trashBtn}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    // justifyContent: "space-between",
    backgroundColor: "#E5E5E5",
  },
  cameraView: {
    overflow: "hidden",
    borderRadius: 10,

    marginTop: 32,
    height: 240,
  },
  camera: {
    // marginHorizontal: 16,
    // marginTop: 32,
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  tuchSnap: {
    position: "absolute",
    zIndex: 8,
  },
  snap: {
    width: 60,
    height: 60,
    // background: "rgba(255, 255, 255, 0.3)",
    zIndex: 1000,
  },
  takePhotoContainer: {
    position: "absolute",
    zIndex: 9,
    left: 0,
    height: 240,
    borderColor: "#fff",
    borderWidth: 1,
  },
  takePhoto: {
    width: 400,
    height: 240,
  },
  trashBtn: {
    // backgroundColor: "tomato",
    height: 40,
    width: 70,
  },
  trashBtnContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  publicateBtn: {
    marginTop: 15,
    height: 51,

    borderRadius: 100,

    justifyContent: "center",
    alignItems: "center",
  },
  publicateBtnText: {
    fontSize: 16,
    // color: "#BDBDBD",
  },
  textInput: {
    fontSize: 16,
    color: "#BDBDBD",
  },
  inputLoadBtn: {
    // color: "#212121",
    // backgroundColor: "#F6F6F6",
    paddingVertical: 8,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  textInputKeyboard: {
    fontSize: 16,
    color: "#212121",
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  textInputKeyboardView: {
    borderBottomWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#E5E5E5",
    paddingTop: 10,
    borderRadius: 16,
  },
  keyboardShow: {
    position: "absolute",
    backgroundColor: "#fff",
    width: "100%",
    bottom: 70,
    borderRadius: 16,
  },
});

export default CreatePostsScreen;
