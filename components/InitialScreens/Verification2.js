import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";

import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Otp_Input from "../Tabs/Otp_Input";

export default function Verification() {
    const navigation = useNavigation();

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
        <View style={styles.sidebar}>
              </View>
         <Image
          source={require("../../assets/Medisend_pharmacy1.png")}
          style={styles.image}
        ></Image>
        <View style={styles.sidebar_icon}>   <FontAwesome name="check-circle" size={40} color="white" />  </View>
        <View style={styles.sidebar_icon}>  <FontAwesome name="check-circle" size={40} color="white" /></View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-3-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-4-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon}><MaterialCommunityIcons name="numeric-5-circle" size={40} color="white" /> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Create your account</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Look up your Pharmacy</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Pharmacy Details</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Verify</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Complete</Text> </View>
        <Image
          source={require("../../assets/verification.png")}
          style={styles.image1}
        ></Image>
       <View style={{bottom:"68%", left:"19%"}}><Text style={styles.text}> Verification </Text>
        <Text style={styles.text1}>We called you at (123) 456-7890 to share a 5-digit code.</Text>
        <Text style={styles.text1}> Please enter the code to verify your account.</Text></View>
        
        <View style={styles.container}> <Otp_Input
                name="otp1"
              //  value={values.otp1}
                //onChangeText={handleChange("otp1")}
                // onFocus={() => otp.focus()}
                keyboardType="numeric"
                autoFocus={true}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                
              />
              <Otp_Input
                name="otp2"
               // value={values.otp2}
                keyboardType="numeric"
               // onChangeText={handleChange("otp2")}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                // onChangeText={() => handleChange()}
              />
              <Otp_Input
                name="otp3"
               // value={values.otp3}
                keyboardType="numeric"
               // onChangeText={handleChange("otp3")}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                // onChangeText={() => handleChange()}
              />
              <Otp_Input
                name="otp4"
               // value={values.otp4}
                keyboardType="numeric"
              //  onChangeText={handleChange("otp4")}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                // onChangeText={() => handleChange()}
              />
              <Otp_Input
                name="otp5"
               // value={values.otp5}
                keyboardType="numeric"
                //onChangeText={handleChange("otp5")}
                inputContainerStyle={{ borderBottomWidth: 0 }}
                // onChangeText={() => handleChange()}
              /></View>
                      <View style={{bottom:140}}> 
               <Text style={styles.text1}>Didn’t receive a code? </Text>
                <Text style={styles.text2}>Call Again</Text>
          </View>

          <View style={styles.buttonsContainer}> 
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Complete")}
        >
          <Text style={styles.textSign}>Continue</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer1}> 
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Verification")}
        >
          <Text style={styles.textSign}>Previous</Text>
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }
  const styles = StyleSheet.create({
  image: {
    width: 380,
    height: 40,
    right:"35%",
    bottom:"33%",
  },
  text: {
  marginBottom:30,
  marginHorizontal:"19%",
    right: "20%",
    fontSize:28,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  text1: {
    //color: colors.orange,
    //right: "10%",
    //top:"50%",
    fontSize:15,
    fontFamily:"Amiko-Regular",
    fontWeight:"normal",
  },
  text2: {
    color: "orange",
    right: "10%",
    //top:"50%",
    fontSize:15,
    fontFamily:"Amiko-Regular",
    fontWeight:"normal",
  },
  container: {
   bottom:"75%",
   width:100,
   left:"20%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
   // marginHorizontal: 100,
    marginTop: "20%",
  },
  sidebar:{
    backgroundColor:"#6396E3",
    bottom:100,
    right:480,
    height:900,
    width:"36%",
    //maxHeight:500,
  },
  side_header:{
    bottom:"44.5%",
    marginBottom:60,
    alignSelf:"center",
    right:450,
  },
  buttonsContainer: {
    bottom: "70%",
    width: 200,
    left:"30%",
    height: 47,
    backgroundColor: "#6396E3",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonsContainer1: {
    bottom: "72%",
    alignItems: "center",
   left:"8%",
   //marginBottom: 20,
    width: 200,
    height: 50,
    backgroundColor: "#6396E3",
    borderRadius: 5,
  },
  login: {
    width: "45%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,  
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    // fontFamily: "Amiko",
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
  },
  image1: {
    width: 120,
    height: 120,
    left:"17%",
    bottom:"69%",
  },
  side_text: {
    color: "white",
    right: "20%",
    fontSize:25,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  sidebar_icon:{
    bottom:"27.5%",
    right:"44%",
    marginBottom:50,
  },
})