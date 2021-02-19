import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";

import { Icon, Header } from 'react-native-elements';
import { useNavigation } from "@react-navigation/native";
import { FontAwesome } from '@expo/vector-icons';

// Shopping Cart Screen
export default function Verification() {
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
         <Image
          source={require("../../assets/Medisend_pharmacy1.png")}
          style={styles.image}
        ></Image>
        <View style={{left:610, bottom:190}}> 
        <Text fontFamily="Amiko-Regular" fontSize={17} alignSelf="center"> Question?</Text> 
        <Text  style={styles.text1}>Contact us</Text>
        </View>
        <View style={styles.header}>
                        <Text style={styles.text}>Thank you for partnering with Medisend.</Text>
                        <Text fontFamily="Amiko-Regular" fontSize={17} alignSelf="center"> {"                 "} We are delighted you chose Medisend. We are currently processing your account information. </Text>
                        <Text fontFamily="Amiko-Regular" fontSize={17} alignSelf="center"> 
                         {"                          "} An email will be sent to pharmacy@gmail.com when we finish reviewing your account. </Text>
                        <Text fontFamily="Amiko-Regular" fontSize={17} alignSelf="center"> 
                         {"                                                                    "} Thank you for your patience.</Text>
        </View>
        <Image
          source={require("../../assets/online_shop.png")}
          style={styles.image1}
        ></Image>
        <View>
          <Text fontFamily="Amiko-Regular" fontSize={17} alignSelf="center">
             <FontAwesome name="question-circle-o" size={22} color="coral" />
           {"  "}Why we do this?</Text></View>
         <Image
          source={require("../../assets/skyline.png")}
          style={styles.image2}
        ></Image>
                       
            <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Home")}
        >
          <Text style={styles.textSign}>Exit this page</Text>
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }
  const styles = StyleSheet.create({
  skip: {
    position: "absolute",
    right: 20,
    top:"2%"
    
  },
  skiptext: {
    color: "orange",
    fontFamily:"Amiko-SemiBold",
    fontSize:15,
  },
  image: {
    width: 380,
    height: 40,
    right:"35%",
    bottom:140,
  },
  image1: {
    width: 100,
    height: 100,
  //  left:"35%",
    bottom:50,
  },
  image2: {
    width: 1000,
    height: 110,
  //  left:"35%",
    top:150,
  },
  header:{
    bottom:100,
    alignSelf:"center",
  },
  text: {
    color: "#6396E3",
    alignSelf:"center",
    fontSize:35,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  text1: {
    color: "coral",
    alignSelf:"center",
    fontSize:15,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "23%",
    alignItems: "start",
    padding: [13, 0, 0, 20],
    width: 280,
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