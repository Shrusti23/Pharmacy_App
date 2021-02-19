import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Delete() {
  const navigation = useNavigation();

    return(
        <View style={{flex:1}}> 
           <View style={styles.container}>
                   <View style={{top:"18%",left:"5%"}}>
                       <Text style={{fontFamily:"Amiko-Bold",fontSize:26}}> Change Password</Text>
                        <Text>{"  "}</Text>
                         <Text style={{fontSize:15,fontFamily:"Amiko-regular"}}> We will email you a link to change your password.</Text>
                         
                   <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={() => navigation.navigate("Change_password")}>
                            <Text style={styles.textSign}>Change Password</Text>
                        </TouchableOpacity>
                    </View>
                   
               </View>
               
               </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: .7, 
         backgroundColor: '#fff',
         marginHorizontal:"15%",
         marginVertical:"18%",  
      },
    
      buttonsContainer: {
        flexDirection: "row",
        position: "absolute",
        top: "130%",
        alignSelf:"center",
        padding: [13, 0, 0, 4],
        width: 200,
        height: 47,
        backgroundColor: "#6396E3",
        borderRadius: 5,
        justifyContent: "center",
      },
      
      login: {
        width: "55%",
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
        fontSize: 12,
        fontWeight: "bold",
       // lineHeight: 20,
      
      },
     
    })