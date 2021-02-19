import React, { useState } from "react";
import { View, Text, StyleSheet,Switch,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Get_alert() {
    const [isEnabled, setIsEnabled] = useState(false);
    const [iEnabled, setIEnabled] = useState(false);
    const [IEnabled, setiEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
    const togSwitch = () => setIEnabled((previousState) => !previousState);
    const togswitch = () => setiEnabled((previousState) => !previousState);

    return(
        <View style={{flex:1}}> 
           <View style={styles.container}> 
            <View style={styles.row1}>
                 <Image
                     source={require("../../../../assets/alert.png")}
                    style={styles.image}
                ></Image>
                <View style={{left:"12%",top:"20%"}}> <Text style={{fontSize:24,fontFamily: "Amiko-SemiBold"}}>{"                 "}Get Alerts on Suspicious Activity</Text>
                <Text style={{fontSize:18,color:"grey",fontFamily: "Amiko-Regular"}}>Get alerts for attempted login from unrecognized device or browser.</Text></View>
                <View style={{top:"25%",left:"50%"}}>
                    <Switch
                        trackcolor={{ false: "grey", true: "coral" }}
                        thumbColor={isEnabled ? "white" : "coral"}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
               </View>
            </View>
            
            <View style={styles.row}>
               <View style={{left:"10%",top:"15%"}}> <Text style={{fontSize:24,fontFamily: "Amiko-SemiBold"}}>Notification</Text>
                <Text style={{fontSize:18,color:"grey",fontFamily: "Amiko-Regular"}}>Get notifications when there is suspicious activity.</Text></View>
                <View style={{bottom:"10%",left:"85%"}}>
                    <Switch
                        trackcolor={{ false: "grey", true: "coral" }}
                        thumbColor={iEnabled ? "white" : "coral"}
                        onValueChange={togSwitch}
                        value={iEnabled}
               /></View>
             
            </View>
            <View style={{left:"10%",top:"8%"}} >
                <Text style={{fontSize:24, fontFamily: "Amiko-SemiBold"}}>Email</Text>
                <Text style={{fontSize:18,color:"grey",fontFamily: "Amiko-Regular"}}>Get email alerts when there is suspicious activity.</Text> </View>
                <View style={{bottom:"5%",left:"85%"}}>
                    <Switch
                        trackcolor={{ false: "grey", true: "coral" }}
                        thumbColor={IEnabled ? "white" : "coral"}
                        onValueChange={togswitch}
                        value={IEnabled}
                    />
                </View>
                <View style={{ left:"80%"}}> <Text style={{fontSize:12,fontFamily:"Amiko-Regular",color:"grey"}}>Pharmacy@gmail.com</Text>
                        <Text style={{fontSize:12,fontFamily:"Amiko-Regular",color:"coral"}}>edit</Text>
                 </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: .9, 
         backgroundColor: '#fff',
         marginHorizontal:"13%",
         marginVertical:"8%", 
      },
    image: {
        width: 90,
        height: 80,
        alignSelf:"center",
        top:"6%",
      },
      row: {
        borderColor: '#DCDCDC',
        width:"100%",
        height:120,
        borderBottomWidth: 1,
       // padding:"1.5%",
      },
      row1: {
        borderColor: '#DCDCDC',
        width:"100%",
        height:230,
        borderBottomWidth: 1,
       // padding:"1.5%",
      },
    })