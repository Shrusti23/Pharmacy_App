import React,{useState,Fragment} from "react";
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { Modal, Portal, Button, Provider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";


export default function Deactivate_Account() {
  const navigation = useNavigation();
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visible, setVisible] = useState(false);
  const shModal = () => Setvisible(true);
  const hiModal = () => Setvisible(false);
  const [Visible, Setvisible] = useState(false);
    return(
        <View style={{flex:1}}> 
          <Provider>
           {/* 1st modal password confirm */}
            <Portal> 
              <Modal visible={Visible} onDismiss={hiModal} contentContainerStyle={styles.containerStyle}>
                 <View style={styles.row3}>
                   <Text>{" "}</Text>
                   <Text style={{fontFamily:"Amiko-Bold", fontSize:20,color:"white",textAlign:"center"}}>Enter password to confirm.</Text>
                 </View>   
                <View style={styles.inputView3}>
                  <Text style={styles.edit3}> Password</Text>
                  <TextInput
                       name="password"
                       // value={values.password}
                      style={styles.inputText}
                      // onChangeText={handleChange("password")}
                      //onBlur={handleBlur("password")}
                       inputContainerStyle={{ borderBottomWidth: 0 }}
                  />

                 </View>
                 <View style={styles.buttonsContainer2}>
                   <TouchableOpacity
                     style={styles.login}
                     onPress={showModal}>
                    <Text style={styles.textSign}>Deactivate Account</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={styles.buttonsContainer3}>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => navigation.navigate("Deactivate")} >
                       <Text style={styles.textSign1}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
            </Portal>
  {/*  2nd modal deactivation confirmed */}
           <Portal> 
             <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle1}>
             <View style={styles.image}>
             <AntDesign name="checkcircleo" size={70} color="#03BD52"/>
             </View>
             <View style={{width:"500%",right:"38%",bottom:"20%"}}>
                  <Text style={{fontSize:32,fontFamily:"Amiko-Bold"}}>Account Deactivated.</Text></View>
                <View style={{width:"220%",right:"55%",bottom:"10%"}}> 
                    <Text style={{fontSize:18,fontFamily:"Amiko-SemiBold",textAlign:"center"}}>We removed your pharmacy and medicine listings from the Medisend mobile app.
                     You can log in to reactivate your account.</Text> 
                  </View>
                  <View style={styles.buttonsContainer4}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={() => navigation.navigate("Deactivate")}>
                            <Text style={styles.textSign}>Done</Text>
                        </TouchableOpacity>
                   </View>

                
                </Modal>
            </Portal>
{/* Deactivate tab content */}
           <View style={styles.container}>
                   <View style={{top:"20%",left:"5%"}}>
                       <Text style={{fontFamily:"Amiko-Bold",fontSize:26}}> Deactivate Your Medisend Account</Text>
                      <Text style={{fontSize:15,fontFamily:"Amiko-regular",color:"grey"}}> Deactivating your account will remove your pharmacy and medicine listings from the Medisend mobile application. 
                                  You can log in to reactivate your account.</Text>
                   <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={shModal}>
                            <Text style={styles.textSign}>Deactivate Account</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonsContainer1}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={() => navigation.navigate("Deactivate")}
                             >
                            <Text style={styles.textSign1}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
               </View>
               
               </View>
               </Provider>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: .7, 
         backgroundColor: '#fff',
         marginHorizontal:"12%",
         marginVertical:"15%",  
      },
    containerStyle:{
      backgroundColor: 'white', 
      padding: "8%", 
      marginHorizontal:"32%",
    },
    containerStyle1: {
      backgroundColor: 'white',  
      padding: "12%", 
      marginHorizontal:"30%",
    },
    image: {
      width: 1,
      height: 1,
      bottom:"90%",
      left:"30%",   
     },
      buttonsContainer: {
        flexDirection: "row",
        position: "absolute",
        top: "140%",
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
        top: "140%",
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
      buttonsContainer2: {
        flexDirection: "row",
        position: "absolute",
        top: "65%",
        left:"55%",
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
        top: "65%",
        left:"25%",
        padding: [13, 0, 0, 20],
        width: 100,
        height: 47,
        backgroundColor: "white",
        borderRadius: 5,
        borderWidth:3,
        borderColor:"#7198D4",
        justifyContent: "center",
      },
      buttonsContainer4: {
        flexDirection: "row",
        position: "absolute",
        bottom: "12%",
        left:"38%",
        padding: [13, 0, 0, 4],
        width: 100,
        height: 47,
        backgroundColor: "#6396E3",
        borderRadius: 5,
        justifyContent: "center",
      },
      row3: {
        borderColor: '#DCDCDC',
        width:"180%",
        height:"60%",
        bottom:"75.5%",
        right:"40%",
        borderBottomWidth: 1,
        textAlign:"center",
        backgroundColor:"#FB9B7A",
      },
      inputView3: {
        borderRadius: 25,
        left:"5%",
        bottom:"48%",
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
      edit3: {
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        borderRadius: 25,
        marginBottom: "10%",
        fontFamily: "Amiko-SemiBold",
        width: "70%",
        height: 21,
        fontSize: 18,
        right:"64%",
        top:"15%",
      },
      inputText: {
        width: 300,
        height:48,
        color:"black",
        fontFamily: "Amiko-Regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontStyle: 18,
        //lineHeight: 21,
        //opacity: 0.2,
      },
    })