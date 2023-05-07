import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";

const CommentsScreen = ({ navigation, route }) => {
  return (
    <View style={style.container}>
      <View style={style.header}>
        <TouchableOpacity
          style={{ position: "absolute", right: 200 }}
          onPress={() => navigation.navigate("Posts")}
        >
          <Image
            source={require("../../assets/png/arrowLeft.png")}
            style={{ width: 24, height: 24, marginTop: 4 }}
          />
        </TouchableOpacity>
        <Text style={{ fontSize: 20 }}>Comments</Text>
      </View>
      <View></View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
  },
  header: {
    marginTop: 40,
    height: 50,
  },
});

export default CommentsScreen;
