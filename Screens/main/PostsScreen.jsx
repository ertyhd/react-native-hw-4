import React from "react";
import { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const PostsScreen = ({ navigation, route }) => {
  const [posts, setPosts] = useState([]);

  // const sendLocation = () => {
  //   const location = item.location;
  //   const photoName = item.description;
  //   navigation.navigate("Map", location, photoName);
  // };

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  console.log(posts);
  return (
    <View style={style.container}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              height: 200,
              marginBottom: 90,
              // justifyContent: "center",
              // alignItems: "center",
              marginHorizontal: 16,
            }}
          >
            <Image source={{ uri: item.photo }} style={{ height: 200 }} />
            <Text style={{ paddingTop: 8 }}>{item.photoName}</Text>
            <View style={style.detailsBlock}>
              <TouchableOpacity
                style={style.details}
                onPress={() => {
                  navigation.navigate("Comments");
                }}
              >
                <Image
                  source={require("../../assets/png/Shape.png")}
                  style={{ width: 18, height: 18 }}
                />
                <Text style={style.detailsText}>100</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={style.details}
                onPress={() => {
                  const location = item.location;
                  const locationDescription = item.regionName;
                  navigation.navigate("Map", { location, locationDescription });
                }}
              >
                <Image
                  source={require("../../assets/png/mapPin.png")}
                  style={{ width: 20, height: 24 }}
                />
                <Text
                  style={{
                    ...style.detailsText,
                    borderBottomWidth: 1,
                    borderColor: "balck",
                  }}
                >
                  {item.regionName}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  detailsBlock: {
    flexDirection: "row",
    marginTop: 10,
  },
  details: {
    flexDirection: "row",
    paddingRight: 20,
  },
  detailsText: {
    paddingLeft: 8,
  },
});

export default PostsScreen;
