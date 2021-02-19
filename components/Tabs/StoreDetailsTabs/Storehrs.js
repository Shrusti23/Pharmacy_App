import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity,Switch } from "react-native";
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import { AntDesign } from '@expo/vector-icons';

import TimePicker from "./TimePicker";
import { useNavigation } from "@react-navigation/native";


export default function Storehrs() {
  const navigation = useNavigation();

//switch for hours
const [isEnabled1, setIsEnabled1] = React.useState(false);
const [isEnabled2, setIsEnabled2] = React.useState(false);
const [isEnabled3, setIsEnabled3] = React.useState(false);
const [isEnabled4, setIsEnabled4] = React.useState(false);
const [isEnabled5, setIsEnabled5] = React.useState(false);
const [isEnabled6, setIsEnabled6] = React.useState(false);
const [isEnabled7, setIsEnabled7] = React.useState(false);

const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);
const toggleSwitch4 = () => setIsEnabled4((previousState) => !previousState);
const toggleSwitch5 = () => setIsEnabled5((previousState) => !previousState);
const toggleSwitch6 = () => setIsEnabled6((previousState) => !previousState);
const toggleSwitch7 = () => setIsEnabled7((previousState) => !previousState);

    return (
        <View style={{ flex: 1, backgroundColor:"white" }}>
          
            <View style={{ height:"16%", right:"1%" }}>
                <View style={{left:"5.8%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Store Hours</Text>
                </View>
                <View style={{left:"6%"}}><Text style={styles.text}>Keep your pharmacy information up to date with  </Text>
                                        <Text style={styles.text}>accurate and timely store hours.</Text></View>
                <View style={{bottom:"25%",left:"91%"}}>
                <TouchableOpacity 
                            >
                             <AntDesign name="edit" size={24} color="white" />
                        </TouchableOpacity>
                  </View>
               <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Sunday </Text></View>
               
                <View style={{bottom:"250%",left:"64%"}}>
                    <Switch
                        trackcolor={{ false: "grey", true: "coral" }}
                        thumbColor={isEnabled1 ? "white" : "coral"}
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                    />
               </View>
                <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>
                <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Monday </Text></View>
               
               <View style={{bottom:"250%",left:"64%"}}>
                   <Switch
                       trackcolor={{ false: "grey", true: "coral" }}
                       thumbColor={isEnabled2 ? "white" : "coral"}
                       onValueChange={toggleSwitch2}
                       value={isEnabled2}
                   />
              </View>
               <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>

               <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Tuesday </Text></View>
               
               <View style={{bottom:"250%",left:"64%"}}>
                   <Switch
                       trackcolor={{ false: "grey", true: "coral" }}
                       thumbColor={isEnabled3 ? "white" : "coral"}
                       onValueChange={toggleSwitch3}
                       value={isEnabled3}
                   />
              </View>
               <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>
               <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Wednesday </Text></View>
               
               <View style={{bottom:"250%",left:"64%"}}>
                   <Switch
                       trackcolor={{ false: "grey", true: "coral" }}
                       thumbColor={isEnabled4 ? "white" : "coral"}
                       onValueChange={toggleSwitch4}
                       value={isEnabled4}
                   />
              </View>
               <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>
               <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Thursday </Text></View>
               
               <View style={{bottom:"250%",left:"64%"}}>
                   <Switch
                       trackcolor={{ false: "grey", true: "coral" }}
                       thumbColor={isEnabled5 ? "white" : "coral"}
                       onValueChange={toggleSwitch5}
                       value={isEnabled5}
                   />
              </View>
               <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>
               <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Friday </Text></View>
               
               <View style={{bottom:"250%",left:"64%"}}>
                   <Switch
                       trackcolor={{ false: "grey", true: "coral" }}
                       thumbColor={isEnabled6 ? "white" : "coral"}
                       onValueChange={toggleSwitch6}
                       value={isEnabled6}
                   />
              </View>
               <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>
               <View style={{bottom:"190%",left:"55%",marginBottom:"0.5%"}}><Text style={styles.text}>Saturday </Text></View>
               
               <View style={{bottom:"250%",left:"64%"}}>
                   <Switch
                       trackcolor={{ false: "grey", true: "coral" }}
                       thumbColor={isEnabled7 ? "white" : "coral"}
                       onValueChange={toggleSwitch7}
                       value={isEnabled7}
                   />
              </View>
               <View style={{bottom:"56%",left:"22%", marginVertical:"-11%",}}><TimePicker/></View>
              

            </View>

            

        </View>
        );
}
const styles = StyleSheet.create({
  text: {
    //color: colors.orange,
    right: "20%",
    fontSize:14,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  containerStyle: {
    backgroundColor: 'white',
     padding: "6%",
     marginHorizontal:"13%"
    },
  row: { //1st modal
    borderColor: '#DCDCDC',
    width:"119%",
    height:"16%",
    bottom:"16%",
    right:"9.5%",
    borderBottomWidth: 1,
    textAlign:"Center",
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
  buttonsContainer2: {
    flexDirection: "row",
    position: "absolute",
    top: "75%",
    left:"65%",
    padding: [13, 0, 0, 4],
    width: 100,
    height: 47,
    backgroundColor: "#6396E3",
    borderRadius: 5,
    justifyContent: "center",
  },
  buttonsContainer3: {
    flexDirection: "row",
    position: "absolute",
    top: "75%",
    left:"45%",
    padding: [13, 0, 0, 20],
    width: 100,
    height: 47,
    backgroundColor: "white",
    borderRadius: 5,
    borderWidth:3,
    borderColor:"#7198D4",
    justifyContent: "center",
  },
})