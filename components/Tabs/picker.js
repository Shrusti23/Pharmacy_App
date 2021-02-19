
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";
import { Picker, View, Text, SafeAreaView, StyleSheet } from "react-native";
import Search from "./search";
const Select = () => {
  const [choosenLabel, setChoosenLabel] = useState("Current");
  const [choosenIndex, setChoosenIndex] = useState("2");
  //const [value, setValue] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.icon}>
        <FontAwesome name="list" size={24} color="black" />
      </View>
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
        <Picker.Item label="Current" value="Current" />
        <Picker.Item label="Completed" value="Completed" />
        <Picker.Item label="Billing" value="Billing" />
      </Picker>
      {/*Text to show selected picker value*/}
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
    // padding:500,
    top: 245,
    marginHorizontal: 600,
    right: 300,
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

export default Select;
