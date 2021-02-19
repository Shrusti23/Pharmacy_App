import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Customers() {
    return(
        <View style={styles.container}> 
             <Text style={styles.header}> Customers</Text>  

             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

             <Image
                source= {require('./images/Customers.png')}
                style={{width:150,height:150}}

                />



        <Text style={styles.text1}>Stay In Touch</Text>
        <Text style = {styles.text2}> You will be able to see your customer's presecriptions with your pharmacy and their past orders</Text>

      </View>

        </View> 
        

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1, 
        padding: 18, 
         backgroundColor: '#fff' 
      },


      header: { 
        fontSize:30,    
       fontWeight:"700",
      fontFamily:"Amiko-Regular" },


      text1: {
        //color: colors.orange,
        right: "20%",
        fontSize:20,
        fontFamily:"Amiko-Regular",
        fontWeight:"bold",
        marginTop: 50,
      },


      text2: {
        //color: colors.orange,
        // right: "20%",
        fontSize:15,
        fontFamily:"Amiko-Regular",
        fontWeight:300,
        flexWrap: 1,
      },

      
    
    
    
    
    
    })