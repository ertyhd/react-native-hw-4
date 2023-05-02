import React from "react";
import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";

const AuthStack = createStackNavigator();

import RegistrationScreen from "./Screens/auth/RegistrationScreen";
import LoginScreen from "./Screens/auth/LoginScreen";
import HomeTabs from "./Screens/main/Home";

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

  return <HomeTabs />;
};
