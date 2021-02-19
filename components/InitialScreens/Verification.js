import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";

import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { RadioButton } from 'react-native-paper';


export default function Verification() {
    const navigation = useNavigation();
      const [checked, setChecked] = React.useState('first');
      
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
        <View style={styles.sidebar}>
              </View> 
       <Image
          source={require("../../assets/Medisend_pharmacy1.png")}
          style={styles.image} ></Image>
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
        <View style={{bottom:"68%", left:"19%"}}><Text style={styles.text}>Verification </Text>
        <Text style={styles.text2}>To claim your pharmacy account, we must verify your account.</Text>
       <Text style={styles.text2}>  Please select a method for verification. </Text></View>
         <View style={{marginTop:200, bottom:"72%", left:"18%"}}> 
          <RadioButton
            value="first"
             status={ checked === 'first' ? 'checked' : 'unchecked' }
              onPress={() => setChecked('first')}
          />  
         <View  style={{left:40, bottom:30}}> <Text style={styles.text1}>Call at (123) 456-7890</Text>
          <Text style={{fontSize:16,fontFamily:"Amiko-Regular"}}>We will call and ask you to enter a code onto your screen.</Text>
          </View> </View>
        <View style={{marginTop:100, bottom:"75%", left:"10.5%"}}> 
          <RadioButton
             value="second"
             status={ checked === 'second' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('second')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Email pharmacy@gmail.com</Text></View>
            </View>
            <View style={styles.buttonsContainer}> 
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Verification2")}
        >
          <Text style={styles.textSign}>Continue</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer1}> 
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Terms and agreement")}
        >
          <Text style={styles.textSign}>Previous</Text>
        </TouchableOpacity>
        </View>
  
      </View>
    );
  }
  const styles = StyleSheet.create({
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
    sidebar:{
      backgroundColor:"#6396E3",
      bottom:100,
      right:480,
      height:900,
      width:"36%",
      //maxHeight:500,
    },
    sidebar_icon:{
      bottom:"27.5%",
      right:"44%",
      marginBottom:50,
    },
  image: {
    width: 380,
    height: 40,
    right:"35%",
    bottom:"33%",
  },
  text: {
    //color: colors.orange,
    right: "20%",
    fontSize:28,
    marginBottom:20,
    marginHorizontal:"30%",
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  text1: {
    //color: colors.orange,
    //right: "10%",
   // top:"50%",
    fontSize:17,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  text2: {
    //color: colors.orange,
    //right: "10%",
   // top:"50%",
    fontSize:18,
    fontFamily:"Amiko-Regular",
    fontWeight:"500",
  },
  side_header:{
    bottom:"44.5%",
    marginBottom:60,
    alignSelf:"center",
    right:450,
  },
  side_text: {
    color: "white",
    right: "20%",
    fontSize:25,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  
})