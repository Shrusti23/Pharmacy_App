import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Deactivate() {
    const navigation = useNavigation();

    return(
        <View style={{flex:1}}> 
           <View style={styles.container}>
               <View style={styles.row}>
                   <View style={{top:"30%",left:"5%"}}>
                       <Text style={{fontFamily:"Amiko-Bold",fontSize:26}}> Deactivate Your Medisend Account</Text>
    <Text style={{fontSize:15,fontFamily:"Amiko-regular",color:"grey"}}>{"  "}You can temporarily deactivate or permantenly delete your account.</Text>
                   </View>
               </View>
               <View style={styles.row}>
                  <View style={{top:"20%",left:"5%"}}> 
                        <Text style={{fontFamily:"Amiko-SemiBold",fontSize:20}}>Deactivate your account</Text>
                        <Text style={{fontSize:15,fontFamily:"Amiko-Regular"}}>Deactivating your account will remove your pharmacy and medicine listings from Medisend customers. </Text>
                        <Text style={{fontSize:15,fontFamily:"Amiko-Regular"}}>You can log in to reactivate your account.</Text>
                   </View>
                   <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={() => navigation.navigate("Deactivate-Account")}
                             >
                            <Text style={styles.textSign}>Deactivate Account</Text>
                        </TouchableOpacity>
                    </View>
               </View>
               <View style={{top:"10%",left:"5%"}}>
                   <Text style={{fontFamily:"Amiko-Regular",fontSize:15}}>If you want to, you can delete your account. Deleting your account is permanent. </Text>
                  <Text style={{fontSize:15,fontFamily:"Amiko-Regular"}}> Once you delete your account, you will not be able to retrieve it back.</Text>
                   <TouchableOpacity 
                            style={{left:"75%",bottom:"10%"}} 
                            onPress={() => navigation.navigate("Delete")}>
                             
                            <Text style={{fontSize:15,fontFamily:"Amiko-Regular",color:"#7198D4"}}>Delete Account</Text>
                        </TouchableOpacity>
               </View>
               </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: .7, 
         backgroundColor: '#fff',
         marginHorizontal:"12%",
         marginVertical:"6%",  
      },
    row: {
        borderColor: '#DCDCDC',
        width:"100%",
        height:150,
        borderBottomWidth: 1,
       // padding:"1.5%",
      },
      buttonsContainer: {
        flexDirection: "row",
        position: "absolute",
        bottom: "10%",
        left:"80%",
        padding: [13, 0, 0, 20],
        width: 100,
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
        fontSize: 12,
        fontWeight: "bold",
       // lineHeight: 20,
      
      }
    })