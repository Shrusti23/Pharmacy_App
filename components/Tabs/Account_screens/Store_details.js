import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import Storehrs from "../StoreDetailsTabs/Storehrs";
import SplHrs from "../StoreDetailsTabs/SplHrs";
import address from "../StoreDetailsTabs/address";
import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";
import ErrorMessage from "../ErrorMessage";
import authApi from "../../api/auth";
import useAuth from "../../authorization/useAuth";
import { Formik } from 'formik';

const validationSchema = Yup.object().shape({
  
  countrycode: Yup.string()
    .label("countrycode")
   .required()
    .min(2,"enter 2 digit code"),
  phonenumber: Yup.string()
   .label("phonenumber")
    .required()
    .min(10, "enter 10 digit number"),
  website: Yup.string()
  .label("website")
  .required()
  .min(5, "enter your website"),  

});


export default function StoreDetails() {
  const navigation = useNavigation();
  const [error, setError] = useState();

  const handleSubmit = async ({address,apartnumber,city,state,postalcode}) => {
    const result = await authApi.address(address,apartnumber,city,state,postalcode);
    console.log(result.data.address);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    //navigation.navigate("EnterPharmacyDetails");
  };
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
           <View style={styles.row}>
                <View style={{left:"5.8%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Address</Text>
                </View>
                <View style={{left:"6%"}}><Text style={styles.text}>Let drivers and customers know where your pharmacy is located at.</Text></View>
               <View style={{bottom:"20%",left:"60%"}}>
                  <address/>
              </View>
               <View style={{bottom:"40%",left:"90%"}}><AntDesign name="edit" size={24} color="coral" /></View>
            </View>

            <View style={styles.row}>
                <View style={{left:"5.8%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Phone</Text>
                </View>
                <View style={{left:"6%"}}><Text style={styles.text}>Please let customer and drivers know how they can contact you.</Text></View>
               <View style={{bottom:"20%",left:"70%"}}><Text style={styles.text}> (123) 456-7890 </Text></View>
               <View style={{bottom:"40%",left:"90%"}}><AntDesign name="edit" size={24} color="coral" /></View>
            </View>

            <View style={styles.row}>
                <View style={{left:"5.8%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Website</Text>
                </View>
                <View style={{left:"6%"}}><Text style={styles.text}>This is optional. Please provide your pharmacy’s website. </Text></View>
               <View style={{bottom:"20%",left:"70%"}}><Text style={styles.text}> Websitecom </Text></View>
               <View style={{bottom:"40%",left:"90%"}}><AntDesign name="edit" size={24} color="coral" /></View>
            </View>

            <View style={{bottom:"0%" ,width:"100%", height:"38%", borderBottomWidth: 1, borderColor: '#DCDCDC', }}>
              <Storehrs/>
            </View> 

            <View style={{borderColor: 'white', width:"100%",height:110, borderBottomWidth: 1,}}>
               <SplHrs/>
            </View>
        </View>
        );
}
const styles = StyleSheet.create({
  conatainer:{
    flex: 1, 
     backgroundColor: '#fff'
  },
  
  text: {
    //color: colors.orange,
    right: "20%",
    fontSize:14,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  text_link: {
    fontSize:14,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
    color:"coral",
    
  },
  row: {
      borderColor: '#DCDCDC',
      width:"100%",
      height:110,
      borderBottomWidth: 1,
     // padding:"1.5%",

    },
})