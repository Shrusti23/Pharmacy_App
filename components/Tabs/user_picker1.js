//React Native Picker
//https://aboutreact.com/react-native-picker/

//import React in our code
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
//import all the components we are going to use
import { Picker, View, Text, SafeAreaView, StyleSheet } from "react-native";
//import SearchBar from 'react-native-search-bar';

const Picker_1 = () => {
  const [choosenLabel, setChoosenLabel] = useState("New");
  const [choosenIndex, setChoosenIndex] = useState("2");
  //const [value, setValue] = useState('');
  return (
    <View style={styles.container}>
      {/*Picker with multiple chose to choose*/}
      {/*selectedValue to set the preselected value if any*/}
      {/*onValueChange will help to handle the changes*/}
      <Picker
        selectedValue={choosenLabel}
        onValueChange={(itemValue, itemIndex) => {
          setChoosenLabel(itemValue);
          setChoosenIndex(itemIndex);
        }}
      >
        <Picker.Item label="New" value="New" />
        <Picker.Item label="In Progress" value="In Progress" />
        <Picker.Item label="Completed" value="Completed" />
      </Picker>
      {/*Text to show selected picker value*/}
     
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    // padding:500,
    top: "10%",
    marginHorizontal: 650,
    right: "45%",
  },
  text: {
    fontSize: 25,
    fontWeight: "200",
    fontFamily: "Amiko-Regular",
    alignSelf: "center",
  },
  icon: {
    right: 25,
    top: 23.5,
  },
});

export default Picker_1;
