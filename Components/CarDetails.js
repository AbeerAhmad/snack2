import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, TouchableOpacity, View,Image } from "react-native";
import firebaseobj from "firebase/app";
import { firebaseConfig } from "../Config";
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(firebaseConfig);
}

export default function CarDetails({ navigation, route }) {

  const item = route.params.item
  return (
    <>

      <>
        <Image
          style={{
            height: 150,
            aspectRatio: 1
          }}
          source={{
            uri: item.Image,
          }}
        />
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            alignItems: "center",
            height: "50%",
          }}
        >
          <Text style={{ top: "5%", fontSize: 20 }}>
            {item.Manufacturing_Year}
          </Text>
          <Text style={{ top: "5%", fontSize: 20 }}>
            {item.EnginePower}
          </Text>
          <Text style={{ top: "5%", fontSize: 20 }}>{item.Color}</Text>

          <Text style={{ top: "5%", fontSize: 20 }}>{item.Make}</Text>

          <Text style={{ top: "5%", fontSize: 20 }}>{item.Model}</Text>
        </View>
      </>

      <View style={styles.container}>
        <TouchableOpacity
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("AddNewCar")}
        >
          <Text>Add New Car</Text>
        </TouchableOpacity>
        <StatusBar style="auto" />
      </View>
    </>
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
