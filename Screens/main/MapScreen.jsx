import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
} from "react-native";
import MapView, { Marker } from "react-native-maps";

const MapScreen = ({ navigation, route }) => {
  const { latitude, longitude } = route.params.location;
  const locationDescription = route.params.locationDescription;
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
        <Text style={{ fontSize: 20 }}>Map Screen</Text>
      </View>

      <MapView
        style={style.mapStyle}
        mapType="standard"
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.06,
        }}
      >
        <Marker
          coordinate={{
            latitude,
            longitude,
          }}
          title={locationDescription}
          description="Location where the photo was taken"
          pinColor="#FF6C00"
        />
      </MapView>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  mapStyle: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
  header: {
    marginTop: 120,
    height: 50,
  },
});

export default MapScreen;
