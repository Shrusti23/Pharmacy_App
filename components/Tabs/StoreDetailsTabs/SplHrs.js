import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TextInput,Switch } from "react-native";
import { Input } from 'react-native-elements';

import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

import TimePicker from "./TimePicker";

export default function StoreDetails() {
  const navigation = useNavigation();

  const [isEnabled1, setIsEnabled1] = React.useState(false);
  const [isEnabled2, setIsEnabled2] = React.useState(false);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
            <View style={{borderColor: 'white', width:"100%",height:110, borderBottomWidth: 1,}}>
                <View style={{left:"5.8%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Special Hours</Text>
                </View>
                <View style={{left:"6%"}}><Text style={styles.text}>Please schedule special business hours for holidays and other circumstances. </Text>
                </View>
                <View style={{ bottom:"3%",right:"2%"}}>
                   <View style={{width:"8%",left:"63%", top:"0.5%"}}>
                                 <TextInput
                                        name="password"
                                        placeholder="MM/DD/YYYY"
                                        // style={styles.inputText}
                                       // onChangeText={handleChange("password")}
                                        //onBlur={handleBlur("password")}
                                    />
                                    

                                 {/* <ErrorMessage
                                     errorValue={touched.password && errors.password}
                                     visible={touched.password && errors.password}/> */}
                        </View>
               
                    <View style={{bottom:"12%",left:"71.5%"}}>
                       <Switch
                        trackcolor={{ false: "grey", true: "coral" }}
                        thumbColor={isEnabled1 ? "white" : "coral"}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
                     </View>
                     <View style={{width:"18%",left:"76%", bottom:"30%"}}>
                                 <TextInput
                                        name="password"
                                        placeholder="00:00 AM/PM"
                                         style={styles.inputText1}  
                                    />               
                      </View>      
                      <View  style={{width:"8%",left:"84%", bottom:"59%"}}> 
                           <Text style={{fontSize:30, fontFamily:"Amko-Bold"}}>  -</Text>
                      </View>
                       <View style={{width:"18%",left:"87%", bottom:"80%"}}>
                                 <TextInput
                                        name="password"
                                        placeholder="00:00 AM/PM"
                                        style={styles.inputText1}         
                                    />                 
                         </View>                  
                  </View>
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
    },
      inputText: {
        width: "50%",
        height:46,
        color:"black",
        fontFamily: "Amiko-Regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontStyle: 18,
        //lineHeight: 21,
        //opacity: 0.2,
      },
      inputText1: {
        width: "47%",
        height:42,
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