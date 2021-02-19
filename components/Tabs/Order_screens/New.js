import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function New() {
    return(
        <View style={styles.container}> 
            <Text> New Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
         backgroundColor: '#fff' 
      },})