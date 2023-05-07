import React from "react";
import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

import RegistrationScreen from "../Screens/auth/RegistrationScreen";
import LoginScreen from "../Screens/auth/LoginScreen";
import HomeTabs from "../Screens/main/Home";
import MapScreen from "../Screens/main/MapScreen";
import CommentsScreen from "../Screens/main/CommentsScreen";

export const useRote = (isAuth) => {
  if (!isAuth) {
    return (
      <AuthStack.Navigator>
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Login"
          component={LoginScreen}
        />
        <AuthStack.Screen
          options={{
            headerShown: false,
          }}
          name="Register"
          component={RegistrationScreen}
        />
      </AuthStack.Navigator>
    );
  }

  return (
    <AuthStack.Navigator>
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Home"
        component={HomeTabs}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Map"
        component={MapScreen}
      />
      <AuthStack.Screen
        options={{
          headerShown: false,
        }}
        name="Comments"
        component={CommentsScreen}
      />
    </AuthStack.Navigator>
  );
};
