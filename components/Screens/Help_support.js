 import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

import { Icon, Header } from 'react-native-elements';


// Shopping Cart Screen
export default function Help_Support() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.text1}>Help and Support</Text>
      </View>
    );

}

const styles = StyleSheet.create({
  text1: {
    //color: colors.orange,
    right: "20%",
    fontSize:20,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  })