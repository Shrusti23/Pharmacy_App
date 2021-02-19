import React, { useState } from "react";
import { View, Text, StyleSheet,Switch,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Two_factor() {
    const [isEnabled, setIsEnabled] = useState(false);
  const [iEnabled, setIEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const togSwitch = () => setIEnabled((previousState) => !previousState);
    return(
        <View style={{flex:1}}> 
           <View style={styles.container}> 
             <Image
              source={require("../../../../assets/verification.png")}
              style={styles.image}
             ></Image>
             <View style={{top:"10%",left:"3%"}}>
                <Text style={{fontSize:25, fontFamily:"Amiko-SemiBold"}}>{"                                          "}Two-Factor Authentication</Text>
                <Text style={{color:"grey", fontSize:18,fontFamily:"Amiko-regular"}}>We’ll ask for a verification code via your security preference if we notice strange activity with your account.</Text>
                <Text style={{color:"green", fontSize:20,fontFamily:"Amiko-regular"}}>{"                                                                          "}ON</Text></View>
           </View>
           <View style={styles.container1}>
                <Image
                 source={require("../../../../assets/phone.png")}
                 style={styles.image1}
                ></Image>
                <View style={{left:"20%"}}>
                <Text style={{fontFamily:"Amiko-SemiBold", fontSize:18}}> Call on (408)897-3214</Text>
                <Text style={{ fontSize:18,fontFamily:"Amiko-regular"}}>We will call and ask you to enter a code onto your screen.</Text>
                </View>
                <View style={{bottom:"30%",left:"90%"}}>
                    <Switch
                trackcolor={{ false: "grey", true: "coral" }}
                thumbColor={isEnabled ? "white" : "coral"}
                onValueChange={toggleSwitch}
                value={isEnabled}
               /></View>
            </View>
           <View style={styles.container2}> 
                <Image
                     source={require("../../../../assets/mail.png")}
                    style={styles.image1}
                ></Image>
                <View style={{left:"15%"}}>
                    <Text style={{fontSize:18,fontFamily:"Amiko-SemiBold"}}> Email to pharmacy@gmail.com</Text>
                    <Text style={{fontSize:18,fontFamily:"Amiko-regular"}}> We will email you a code and ask you to enter the code onto your screen.</Text>
                </View>
                <View style={{bottom:"30%",left:"90%"}}>
                    <Switch
                trackcolor={{ false: "grey", true: "coral" }}
                thumbColor={iEnabled ? "white" : "coral"}
                onValueChange={togSwitch}
                value={iEnabled}
               /></View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 9, 
         backgroundColor: '#fff',
         marginHorizontal:"8%", 
         marginVertical:"2%",
      },
      container1:{
        flex: 5, 
         backgroundColor: '#fff',
         marginHorizontal:"8%", 
         marginVertical:"4%",
         top:"1%",
      },
      container2:{
        flex: 5, 
         backgroundColor: '#fff',
         marginHorizontal:"8%", 
         marginVertical:"4%",
         top:"1%",
      },
      image: {
        width: 110,
        height: 110,
        alignSelf:"center",
        top:"6%",
      },
      image1: {
        width: 50,
        height: 40,
        left:"7%",
        top:"20%",
      },
    })