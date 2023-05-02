import React from "react";

import { NavigationContainer } from "@react-navigation/native";

import { useRote } from "./router";

export default function App() {
  const routing = useRote({});
  return <NavigationContainer>{routing}</NavigationContainer>;
}
