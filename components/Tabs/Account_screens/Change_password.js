import React, { Component } from "react";
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import ErrorMessage from "../ErrorMessage";

export default function Delete() {
  const navigation = useNavigation();

    return(
        <View style={{flex:1}}> 
           <View style={styles.container}>
           <View style={styles.row}>
                       <Text style={{fontFamily:"Amiko-Bold",fontSize:26}}> Change Password</Text> </View>
                       <View style={styles.inputView}>
                                <Text style={styles.edit}>New Password</Text>
                                 <TextInput
                                        name="password"
                                       // value={values.password}
                                        style={styles.inputText}
                                       // onChangeText={handleChange("password")}
                                        //onBlur={handleBlur("password")}
                                        inputContainerStyle={{ borderBottomWidth: 0 }}
                                    />
                                 {/* <ErrorMessage
                                     errorValue={touched.password && errors.password}
                                     visible={touched.password && errors.password}/> */}
                        </View>
                        <View style={styles.inputView}>
                                <Text style={styles.edit}> Confirm Password</Text>
                                 <TextInput
                                        name="password"
                                       // value={values.password}
                                        style={styles.inputText}
                                       // onChangeText={handleChange("password")}
                                        //onBlur={handleBlur("password")}
                                        inputContainerStyle={{ borderBottomWidth: 0 }}
                                    />
                                 {/* <ErrorMessage
                                     errorValue={touched.password && errors.password}
                                     visible={touched.password && errors.password}/> */}
                        </View>
                        
                   <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                             style={styles.login}>
                            <Text style={styles.textSign}>Save</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsContainer1}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={() => navigation.navigate("Account")}
                             >
                            <Text style={styles.textSign1}>Cancel</Text>
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
         marginVertical:"10%",  
      },
    
      buttonsContainer: {
        flexDirection: "row",
        position: "absolute",
        top: "75%",
        left:"45%",
        padding: [13, 0, 0, 4],
        width: 100,
        height: 47,
        backgroundColor: "#6396E3",
        borderRadius: 5,
        justifyContent: "center",
      },
      buttonsContainer1: {
        flexDirection: "row",
        position: "absolute",
        top: "75%",
        left:"30%",
        padding: [13, 0, 0, 20],
        width: 100,
        height: 47,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth:3,
        borderColor:"#7198D4",
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
      
      },
      textSign1: {
        color: "#7198D4",
        fontWeight: "bold",
        textAlign: "center",
        // fontFamily: "Amiko",
        fontSize: 12,
        fontWeight: "bold",
       // lineHeight: 20,
      
      },
      row: {
        borderColor: '#DCDCDC',
        width:"100%",
        height:50,
        borderBottomWidth: 1,
        textAlign:"auto",
      },
      inputView: {
        borderRadius: 25,
        left:"30%",
        justifyContent: "center",
        marginVertical:"3%",
        //marginBottom: "2%",
        width: 300,
        height: 48,
        backgroundColor: "#F4F4F4",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#BDBDBD",
      },
      inputText: {
        width: 300,
        height:46,
        color:"black",
        fontFamily: "Amiko-Regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontStyle: 18,
        //lineHeight: 21,
        //opacity: 0.2,
      },
      edit: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        borderRadius: 25,
        marginBottom: "10%",
        fontFamily: "Amiko-Regular",
        width: "70%",
        height: 21,
        fontWeight: 600,
        fontSize: 16,
        right:"100%"
      },
    })