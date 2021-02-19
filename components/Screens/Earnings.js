import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Customers() {
    return(
        <View style={styles.container}> 
             <Text style={styles.header}> Earnings</Text>  

             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

             <Image
                source= {require('./images/analytics1.png')}
                style={{width:150,height:150}}

                />



        <Text style={styles.text1}>See your earnings</Text>
        <Text style = {styles.text2}> As you get orders, you will be able to see how much your pharmacy is earning.</Text>

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