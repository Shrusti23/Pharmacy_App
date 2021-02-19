import React, { useState } from "react";
//import { ScrollView } from "react-native";
import { Avatar } from "react-native-elements";
import { EvilIcons } from '@expo/vector-icons';
import { View, Text, StyleSheet, TouchableOpacity,Image,Switch } from "react-native";
import { useNavigation } from "@react-navigation/native";
import UserAvatar from 'react-native-user-avatar';

// Shopping Cart Screen
export default function Account() {
  const navigation = useNavigation();

  const [isEnabled, setIsEnabled] = useState(false);
  const [iEnabled, setIEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const togSwitch = () => setIEnabled((previousState) => !previousState);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
             <View style={styles.row1}>
               <View style={{left:"6%",marginBottom:"2%",marginTop:"2%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Image</Text>
                </View>
                <View style={{width:100, bottom:"6%", left:"12%"}}><UserAvatar size={100} name="DP" bgColor="grey" /></View>

               <View style={{left:"35%",marginBottom:"1%",bottom:"45%"}}> <Text style={styles.text_link}>Upload a Photo</Text>
                 <Text style={styles.text}>Upload a photo so customers and drivers can easily recognize your pharmacy.</Text></View>
              </View>

            <View style={styles.row}>
                <View style={{left:"5.8%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Email</Text>
                </View>
                <View style={{left:"6%"}}><Text style={styles.text}>This is the primary email associated with your account. </Text></View>
               <View style={{bottom:"20%",left:"70%"}}><Text style={styles.text}> Pharmacy@gmail.com </Text></View>
            </View>

            <View style={styles.row}>
               <View style={{left:"5%",marginBottom:"2%",marginTop:"1%"}}> 
               <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Password</Text>
               </View>
               <View style={{left:"6%"}}><Text style={styles.text}>Change password for the account </Text></View>
               
               <TouchableOpacity 
                            style={{left:"70%",bottom:"25%"}} 
                            onPress={() => navigation.navigate("Password")}>
                             
                            <Text style={{fontSize:15,fontFamily:"Amiko-Regular",color:"coral"}}>Change Password</Text>
                        </TouchableOpacity>
            </View>

            <View style={styles.row}>
                <View style={{left:"5%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Two-Factor Authentication</Text>
                  </View>
                <View style={{left:"6%"}}> <Text style={styles.text}>We’ll ask for a code if we notice strange activity with your account. </Text></View>
               <View style={{bottom:"20%",left:"80%"}}>
                 <Switch
                trackcolor={{ false: "grey", true: "coral" }}
                thumbColor={isEnabled ? "white" : "coral"}
                onValueChange={toggleSwitch}
                value={isEnabled}
               /></View>
               <View style={{bottom:"40%",left:"90%"}}>
                 <EvilIcons name="chevron-right" size={24} color="black" onPress={() => navigation.navigate("Two_factor")}/>
                 </View>
            </View>

            <View style={styles.row}>
                <View style={{left:"5%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Get Alerts on Suspicious Activity</Text>
                </View>
               <View style={{left:"6%"}}><Text style={styles.text}>We will alert if we notice attempted login from unrecongized devices.</Text></View>
               <View style={{bottom:"20%",left:"80%"}}>
                 <Switch
                trackcolor={{ false: "grey", true: "coral" }}
                thumbColor={iEnabled ? "white" : "coral"}
                onValueChange={togSwitch}
                value={iEnabled}
               /></View>
               <View style={{bottom:"40%",left:"90%"}}>
                 <EvilIcons name="chevron-right" size={24} color="black" onPress={() => navigation.navigate("Get_alert")} />
                 </View>
            </View>

            <View style={styles.row}>
                <View style={{left:"5.3%",marginBottom:"2%",marginTop:"1%"}}>
                  <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Deactivate or Delete</Text>
                </View>
               <View style={{left:"6%"}}>
                 <Text style={styles.text}>Temporarily deactivate or permanantely delete your account.</Text> </View>
                 <View style={{bottom:"20%",left:"90%"}}>
                   <EvilIcons name="chevron-right" size={24} color="black" onPress={() => navigation.navigate("Deactivate")} />
                   </View>
            </View>

            <View style={styles.row}>
               <View style={{left:"5.5%",marginBottom:"2%",marginTop:"1%"}}> 
               <Text style={{fontSize:20,fontFamily:"Amiko-Regular",fontWeight:"bold",}}>Account Created</Text>
               </View>
              <View style={{bottom:"46%",left:"70%"}}> <Text style={styles.text}>August 24th 2020</Text></View>
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
        height:100,
        borderBottomWidth: 1,
       // padding:"1.5%",

      },
      row1: {
        borderColor: '#DCDCDC',
        width:"100%",
        height:170,
        borderBottomWidth: 1,
       // padding:"1.5%",

      },
  })