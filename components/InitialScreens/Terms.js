import React, { Component } from "react";
import { View, Text,TextInput, StyleSheet,TouchableOpacity,Image } from "react-native";

import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CheckboxFormX from 'react-native-checkbox-form';
import { ScrollView } from "react-native-gesture-handler";
const mockData = [
    {
        label: '',
        value: 'one'
    },
];
export default function Terms() {
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
        <View style={styles.sidebar_icon}>   <FontAwesome name="check-circle" size={40} color="white" /></View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-3-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon1}> <MaterialCommunityIcons name="numeric-4-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon1}><MaterialCommunityIcons name="numeric-5-circle" size={40} color="white" /> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Create your account</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Look up your Pharmacy</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Pharmacy Details</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Contacts</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Insurance Acceptance</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Terms and Agreement</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Verify</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Complete</Text> </View>
         
         <View style={{bottom:"72%" , left:"16%"}}><Text style={styles.text}>Terms and agreement</Text></View>

          <View style={styles.inputView}>
            <ScrollView>
              <Text>
               "Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Iaculis massa enim vitae est in orci euismod. 
               Diam commodo, interdum maecenas nisl, risus vulputate tempus. 
               Eu nisi tellus turpis dui lacus, pulvinar velit eget. 
               Tempus, mattis scelerisque non curabitur amet, amet. "
              </Text>
              <Text> {""}</Text>
              <Text>
               "Lorem ipsum dolor sit amet, 
               consectetur adipiscing elit. Iaculis massa enim vitae est in orci euismod. 
               Diam commodo, interdum maecenas nisl, risus vulputate tempus. 
               Eu nisi tellus turpis dui lacus, pulvinar velit eget. 
               Tempus, mattis scelerisque non curabitur amet, amet. "
              </Text>
              </ScrollView>
            </View>
            <View style={{left:"21%" ,bottom:"70%"}} >
            <Text style={styles.text1}>I agree to Medisend’s Pharmacy Terms and acknowledge Medisend’s Privacy Policy.</Text>
          <Text style={styles.text1}>We may email you about Medisend updates and alerts.</Text></View>
         <View style={{bottom:"71%"}}> <CheckboxFormX
                  style={{ width: 350-30, bottom:"45%", left:100}}
                  dataSource={mockData}
                  //itemShowKey=""
                  itemCheckedKey="RNchecked"
                  checkedIcon='dot-circle-o'
                  iconSize={30}
                  formHorizontal={true}
                  labelHorizontal={false}
                 // onChecked={(item) => this._onSelect(item)}
              /></View>
              
              <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Verification")}
        >
          <Text style={styles.textSign}>Continue</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.buttonsContainer1}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("InsuranceQuestion")}
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
    bottom:"35%",
  },
  inputView: {
    borderRadius: 25,
   left: "20%",
    justifyContent: "center",
    bottom: "71%",
    width: 700,
    height: 400,
    backgroundColor: "#F4F4F4",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#BDBDBD",
  },
  text: {
    //color: colors.orange,
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
  sidebar:{
    backgroundColor:"#6396E3",
    bottom:100,
    right:480,
    height:900,
    width:"35%",
    //maxHeight:500,
  },
  side_header:{
    bottom:"48%",
    marginBottom:40,
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
  sidebar_icon:{
    bottom:"32.5%",
    right:"44%",
    marginBottom:40,
  },
  sidebar_icon1:{
    bottom:"25%",
    right:"44%",
    marginBottom:40,
  },
  buttonsContainer: {
    bottom: "70%",
    width: 200,
    left:"26%",
    height: 47,
    backgroundColor: "#6396E3",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonsContainer1: {
    bottom: "72%",
    alignItems: "center",
   left:"6%",
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
    flexDirection: "row",
   // backgroundColor: "rgba(130,130,130,1)",
    
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
})