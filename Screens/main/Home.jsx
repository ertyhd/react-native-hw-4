import React from "react";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, TouchableOpacity } from "react-native";

import PostsScreen from "./PostsScreen";
import CreatePostsScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

import SvgPosts from "../../assets/svg/postsSvg";
import SvgProfile from "../../assets/svg/profileSvg";
import SvgCreatePosts from "../../assets/svg/createPostsSvg";

const MainTab = createBottomTabNavigator();

const HomeTabs = ({ navigation }) => {
  return (
    <MainTab.Navigator>
      <MainTab.Screen
        options={{
          title: "Posts",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 20,
          },
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
          },
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableOpacity style={{ marginRight: 10 }}>
              <Image
                source={require("../../assets/svg/logOut.png")}
                style={{ width: 24, height: 24 }}
              />
            </TouchableOpacity>
          ),
          tabBarIcon: ({ color, size }) => (
            <SvgPosts color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Posts"
        component={PostsScreen}
      />
      <MainTab.Screen
        options={{
          title: "Create posts",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 20,
          },
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <SvgCreatePosts name="Plus" color={color} size={size} />
          ),
          tabBarShowLabel: false,
        }}
        name="Create posts"
        component={CreatePostsScreen}
      />
      <MainTab.Screen
        options={{
          title: "Profile",
          headerTintColor: "#212121",
          headerTitleStyle: {
            fontSize: 20,
          },
          headerTitleAlign: "center",
          tabBarIcon: ({ color, size }) => (
            <SvgProfile color={color} size={size} />
          ),
          tabBarStyle: {
            height: 83,
            paddingTop: 9,
            paddingBottom: 34,
          },
          tabBarShowLabel: false,
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTab.Navigator>
  );
};

export default HomeTabs;
