import { StatusBar } from "expo-status-bar";
import React, { useCallback, useEffect } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import firebaseobj from "firebase/app";
import 'firebase/database'
import { firebaseConfig } from "../Config";
if (!firebaseobj.apps.length) {
  firebaseobj.initializeApp(firebaseConfig);
}

export default function listOfcars({ navigation }) {
  const [list, setlist] = React.useState([]);

  useEffect(() => {
    const Cars = firebaseobj.database().ref("Cars");
    Cars.on("value", (datasnap) => {
      let items = [];

      //   console.log(datasnap.val());
      let data = datasnap.val();
      if (data) {

        Object.keys(data).map((item, i) => {

          items.push({ id: item, ...data[item] })
        })
      }
      // item.push(data);
      setlist(items);

    });
  }, []);

  const handleDelete = (id) => {
    var Cars = firebaseobj.database().ref(`Cars/${id}`);
    var deletecar = Cars.remove();
    console.log(deletecar)
    navigation.navigate()
  };
  console.log(list)
  return (
    <View style={styles.container}>
       <TouchableOpacity
          style={{ borderWidth: 1 }}
          onPress={() => navigation.navigate("AddNewCar")}
        >
          <Text>Add New Car</Text>
        </TouchableOpacity>
      {list.map((item, i) => {
        console.log(item)
        return (
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate("CarDetails",{item:item})}

            >
              <Image
                style={{
                  height: 150,
                  aspectRatio: 1
                }}
                source={{
                  uri: item.Image,
                }}
              />
              <View style={{
                justifyContent: "center",
                alignItems: "center",
              }}>

                <Text style={{ top: "5%", fontSize: 20 }}>{item.Make}</Text>

                <Text style={{ top: "5%", fontSize: 20 }}>{item.Model}</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ borderWidth: 2, width: "70%", alignSelf: "center" }}
              onPress={() => handleDelete(item.id)}
            >
              <Text style={{ alignSelf: "center" }}>Delete</Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
