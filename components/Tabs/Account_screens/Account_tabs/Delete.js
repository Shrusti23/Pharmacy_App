import React, { useState } from "react";
import { View, Text, StyleSheet,TouchableOpacity,TextInput } from "react-native";
import { Modal, Portal, RadioButton, Provider } from 'react-native-paper';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function Delete() {
  const navigation = useNavigation();
  const [checked, setChecked] = React.useState('first');
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [visible, setVisible] = useState(false);
  const shModal = () => Setvisible(true);
  const hiModal = () => Setvisible(false);
  const [Visible, Setvisible] = useState(false);
  const shoModal = () => Setvisibl(true);
  const hidModal = () => Setvisibl(false);
  const [Visibl, Setvisibl] = useState(false);
    return(
        <View style={{flex:1}}> 
        <Provider>
 {/* 1st modal */}
 <Portal>
        <Modal visible={Visibl} onDismiss={hidModal} contentContainerStyle={styles.containerStyle}>
        
        <View style={styles.row}>
                   <Text style={{fontFamily:"Amiko-Bold", fontSize:20,color:"white",textAlign:"center"}}>Delete account</Text>
                   <Text style={{fontFamily:"Amiko-SemiBold", fontSize:18,color:"white",textAlign:"center"}}>Are you sure you want to delete your account?</Text>
                 </View>   
                 <View style={{width:"120%", right:"50%",bottom:"6%"}}> 
          <RadioButton
             value="first"
             color="grey"
             status={ checked === 'first' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('first')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Don’t see the benefit</Text></View>
            </View>

            <View style={{width:"120%", right:"50%",bottom:"9%"}}> 
          <RadioButton
             value="second"
             status={ checked === 'second' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('second')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Not getting orders</Text></View>
            </View>

            <View style={{width:"120%", right:"50%",bottom:"12%"}}> 
          <RadioButton
             value="third"
             status={ checked === 'third' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('third')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>Too complicated</Text></View>
            </View>

            <View style={{width:"90%", right:"50%",bottom:"15%"}}> 
          <RadioButton
             value="fourth"
             status={ checked === 'fourth' ? 'checked' : 'unchecked' }
             onPress={() => setChecked('fourth')}
            />    
            <View  style={{left:40, bottom:30}}><Text style={styles.text1}>others</Text></View>
            </View>
            <View style={styles.inputView_1}>
                  <TextInput
                       name="password"
                       // value={values.password}
                      style={styles.inputText}
                      // onChangeText={handleChange("password")}
                      //onBlur={handleBlur("password")}
                       inputContainerStyle={{ borderBottomWidth: 0 }}
                  />
                 </View>
                 <View style={styles.buttonsContainer_1}>
                   <TouchableOpacity
                     style={styles.login}
                     onPress={shModal}>
                    <Text style={styles.textSign}>Next</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={styles.buttonsContainer_1_1}>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => navigation.navigate("Deactivate")} >
                       <Text style={styles.textSign1}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
        </Modal>
      </Portal>

{/* 2nd modal */}
<Portal> 
              <Modal visible={Visible} onDismiss={hiModal} contentContainerStyle={styles.containerStyle2}>
                 <View style={styles.row2}>
                   <Text>{" "}</Text>
                   <Text style={{fontFamily:"Amiko-Bold", fontSize:20,color:"white",textAlign:"center"}}>Enter password to confirm.</Text>
                 </View>   
                <View style={styles.inputView2}>
                  <Text style={styles.edit2}> Password</Text>
                  <TextInput
                       name="password"
                       // value={values.password}
                      style={styles.inputText2}
                      // onChangeText={handleChange("password")}
                      //onBlur={handleBlur("password")}
                       inputContainerStyle={{ borderBottomWidth: 0 }}
                  />

                 </View>
                 <View style={styles.buttonsContainer2}>
                   <TouchableOpacity
                     style={styles.login}
                     onPress={showModal}>
                    <Text style={styles.textSign}>Delete Account</Text>
                  </TouchableOpacity>
                 </View>
                 <View style={styles.buttonsContainer_2}>
                    <TouchableOpacity
                        style={styles.login}
                        onPress={() => navigation.navigate("Deactivate")} >
                       <Text style={styles.textSign1}>Cancel</Text>
                      </TouchableOpacity>
                  </View>
              </Modal>
            </Portal>
{/* 3rd modal */}

<Portal> 
             <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle3}>
             <View style={styles.image}>
             <AntDesign name="checkcircleo" size={70} color="#03BD52"/>
             </View>
             <View style={{width:"500%",right:"18%",bottom:"20%"}}>
                  <Text style={{fontSize:32,fontFamily:"Amiko-Bold"}}>Account Delete.</Text></View>
                <View style={{width:"220%",right:"55%",bottom:"6%"}}> 
                    <Text style={{fontSize:18,fontFamily:"Amiko-SemiBold",textAlign:"center"}}>We are sorry to see you leave.</Text>
                    <Text>{" "}</Text>
                      <Text style={{fontSize:18,fontFamily:"Amiko-SemiBold",textAlign:"center"}}>You have 30 days to retrieve your account by logging back in. 
                                   After 30 days, we will permanantely delete your account.</Text> 
                  </View>
                  <View style={styles.buttonsContainer3}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={() => navigation.navigate("Deactivate")}>
                            <Text style={styles.textSign}>Done</Text>
                        </TouchableOpacity>
                   </View>

                
                </Modal>
            </Portal>
{/* Delete tab content */}

           <View style={styles.container}>
                   <View style={{top:"18%",left:"2%"}}>
                       <Text style={{fontFamily:"Amiko-Bold",fontSize:26}}> Delete your account</Text>
                        <Text>{""}</Text>
                         <Text style={{fontSize:15,fontFamily:"Amiko-regular"}}> Are you sure you want to delete your account?</Text>
                         <Text>{"   "}</Text>
                         <Text>{"    "}</Text>
                        <Text style={{fontSize:15,fontFamily:"Amiko-regular"}}>If you want to, you can deactivate your account instead. Once you delete your account, 
                                you will not be able to retrieve your account. If you are sure,
                                 we will ask you to enter your password and we will close your account.</Text>

                   <View style={styles.buttonsContainer}>
                        <TouchableOpacity
                             style={styles.login}
                             onPress={shoModal}>
                            <Text style={styles.textSign}>Delete Account</Text>
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
      containerStyle2:{//2nd modal
        backgroundColor: 'white', 
        padding: "8%", 
        marginHorizontal:"32%",
      },
      containerStyle3: { //3rd modal
        backgroundColor: 'white',  
        padding: "12%", 
        marginHorizontal:"30%",
      },
    containerStyle: { // 1st modal
      backgroundColor: 'white', 
       padding: "11%", 
       marginHorizontal:"30%",
      },
      buttonsContainer: {
        flexDirection: "row",
        position: "absolute",
        top: "130%",
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
        top: "130%",
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
        fontFamily: "Amiko_SemiBold",
        fontSize: 12,
        fontWeight: "bold",
       // lineHeight: 20,
      
      },
      textSign1: {
        color: "#7198D4",
        fontWeight: "bold",
        textAlign: "center",
        fontFamily: "Amiko-SemiBold",
        fontSize: 12,
        fontWeight: "bold",
       // lineHeight: 20,
      },
      row2: { //2nd modal
        borderColor: '#DCDCDC',
        width:"180%",
        height:"60%",
        bottom:"75.5%",
        right:"40%",
        borderBottomWidth: 1,
        textAlign:"center",
        backgroundColor:"#FB9B7A",
      },
      row: { //1st modal
        borderColor: '#DCDCDC',
        width:"222%",
        height:"20%",
        bottom:"8.9%",
        right:"61%",
        borderBottomWidth: 1,
        textAlign:"center",
        backgroundColor:"#FB9B7A",
      },
      image: { //3rd modal
        width: 1,
        height: 1,
        bottom:"70%",
        left:"30%",   
       },
       inputView2: { // 2nd modal
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
      edit2: { // 2nd modal
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
      buttonsContainer2: { //2nd modal
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
      buttonsContainer_2: {//2nd modal
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
      buttonsContainer3: {// 3rd modal
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
      buttonsContainer_1: {// 1st modal
        flexDirection: "row",
        position: "absolute",
        top: "86%",
        left:"55%",
        padding: [13, 0, 0, 4],
        width: 100,
        height: 47,
        backgroundColor: "#6396E3",
        borderRadius: 5,
        justifyContent: "center",
      },
      buttonsContainer_1_1: { // 1st modal
        flexDirection: "row",
        position: "absolute",
        top: "86%",
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
      inputView_1: { //1st modal
        borderRadius: 25,
        right:"54%",
        bottom:"22%",
        justifyContent: "center",
        marginVertical:"3%",
        //marginBottom: "2%",
        width: "210%",
        height: "70%",
        backgroundColor: "#F4F4F4",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#BDBDBD",
      },
      inputText: {
        width: "100%",
        height:"120%",
        color:"black",
        fontFamily: "Amiko-Regular",
        fontStyle: "normal",
        fontWeight: "normal",
        fontStyle: 18,
        //lineHeight: 21,
        //opacity: 0.2,
      },
      inputText2: {
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