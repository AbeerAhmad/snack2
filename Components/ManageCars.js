import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import listOfcars from "./listOfcars";
import AddNewCar from "./AddNewCar";
import CarDetails from "./CarDetails";
import { createStackNavigator } from "@react-navigation/stack";
const carStack = createStackNavigator();
export default function ManageCars() {
  return (
    <carStack.Navigator screenOptions={{ headerShown: false }}>
      <carStack.Screen name="listOfcars" component={listOfcars} />
      <carStack.Screen name="CarDetails" component={CarDetails} />
      <carStack.Screen name="AddNewCar" component={AddNewCar} />
    </carStack.Navigator>
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
