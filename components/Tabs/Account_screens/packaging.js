import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";

export default function MedisendSupplies() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
        <View style={styles.header}>
          <Text style={{ fontSize:20,fontFamily:"Amiko-Regular", fontWeight:"bold",marginBottom:"3%"}}>Restock Medisend Packaging</Text>
        
        </View>
        <Image
              source={require("../../../assets/packaging.png")}
              style={styles.image}
            ></Image>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
              style={styles.login}
            >
              <Text style={styles.textSign}>Request Supplies</Text>
            </TouchableOpacity>
            </View>
      </View>);
}
const styles = StyleSheet.create({
    conatainer:{
      flex: 1, 
       backgroundColor: '#fff'
    },
    header:{
      bottom:200,
      alignSelf:"center",
    },
    text: {
      //color: colors.orange,
      right: "20%",
      fontSize:14,
      fontFamily:"Amiko-Regular",
      fontWeight:"bold",
    },
    image: {
      width: 150,
      height: 120,
      alignSelf:"center",
      bottom:120,
    },
    buttonsContainer: {
      flexDirection: "row",
      position: "absolute",
      bottom: "40%",
      alignItems: "start",
      padding: [13, 0, 0, 20],
      width: 300,
      height: 47,
      backgroundColor: "#6396E3",
      borderRadius: 5,
      justifyContent: "center",
    },
    login: {
      width: "45%",
      height: 45,
      justifyContent: "center",
      alignItems: "center",
      borderRadius: 50,
      flexDirection: "row",
      //backgroundColor: "rgba(130,130,130,1)",
      
    },
    textSign: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center",
      // fontFamily: "Amiko",
      fontSize: 15,
      fontWeight: "bold",
      lineHeight: 20,
    
    }
  })