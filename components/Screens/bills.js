import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();
import All from "../Tabs/Order_screens/All";
import New from "../Tabs/Order_screens/New";
import In_progress from "../Tabs/Order_screens/In_progress";
import Completed from "../Tabs/Order_screens/Completed";

export default function bills() {
  return (
    <Tab.Navigator
    initialRouteName="All"
    tabBarOptions={{
      //activeTintColor: "#e91e63",
    }}
  >
    <Tab.Screen name="All" component={All} />
    <Tab.Screen name="New" component={New} />
    <Tab.Screen name="In Progress " component={In_progress} />
    <Tab.Screen name="Completed" component={Completed} />
        </Tab.Navigator>

  );
}

 
const styles = StyleSheet.create({
  
  container:{
      flex: 1, 
      padding: 18, 
       backgroundColor: '#fff' 
    },
  head: {  
      height: 45, 
      color: "#949494",
      fontSize:18  
    },
  title: {  
       borderEndWidth:1, 
       borderColor:"grey", 
       alignSelf:"center",
       fontFamily:"Amiko-Regular"
    },
  title3: { 
      fontSize: 15, 
      alignSelf:"center" 
     },
  row: {  
      borderEndWidth:1,
      borderColor:"grey", 
      textAlign: 'center',
     },
  header: { 
      fontSize:30,    
     fontWeight:"700",
    fontFamily:"Amiko-Regular" },
  orders:{
    fontSize:30,
    fontWeight:"700",
    // top:300,
    left:100,
    fontFamily:"Amiko-Regular",
    
  },
  pick:{
  justifyContent: 'center',
  flexDirection: 'column',
  padding:10,
 // bottom:800,
},
text: {
  fontSize: 25,
  fontFamily:"Amiko-Regular",
  alignSelf: 'center',
},
});
