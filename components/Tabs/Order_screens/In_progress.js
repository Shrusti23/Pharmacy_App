import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function In_progress() {
    return(
        <View style={styles.container}> 
            <Text> In_progress Info</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
         backgroundColor: '#fff' 
      },})