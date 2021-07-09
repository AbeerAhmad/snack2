import { StatusBar } from "expo-status-bar";
import React, { useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import firebaseobj from "firebase/app";
import { firebaseConfig } from "../Config";
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(firebaseConfig);
}
export default function AddNewCar({ navigation }) {
  const [photo, setphoto] = React.useState("");
  const [make, setmake] = React.useState("");
  const [model, setmodel] = React.useState("");
  const [Manufacturing, setManufacturing] = React.useState("");
  const [pwr, setEnginepwr] = React.useState("");
  const [clr, setclr] = React.useState("");
  const insertCardata = useCallback(() => {
    var Cars = firebaseobj.database().ref("Cars");
    var newcar = Cars.push();
    navigation.navigate('listOfcars')
    newcar.set({
      Color: clr,
      EnginePower: pwr,
      Image: photo,
      Make: make,
      Manufacturing_Year: Manufacturing,
      Model: model,
    });
  });
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setphoto}
        value={photo}
        placeholder="Photo URL"
      />
      <TextInput
        style={styles.input}
        onChangeText={setmake}
        value={make}
        placeholder="Make"
      />
      <TextInput
        style={styles.input}
        onChangeText={setmodel}
        value={model}
        placeholder="Model"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setManufacturing}
        value={Manufacturing}
        placeholder="Manufacturing Year"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEnginepwr}
        value={pwr}
        placeholder="Engine Power"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setclr}
        value={clr}
        placeholder="Colour"
      />
      <TouchableOpacity
        onPress={() => insertCardata()}
        style={{ borderWidth: 1, width: "50%" }}
      >
        <Text style={{ alignSelf: "center" }}>Add Car</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: "10%",
    width: "90%",
    margin: "2%",
    borderWidth: 1,
  },
});
