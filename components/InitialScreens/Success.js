import React,{useState,Fragment} from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";




function WelcomeScreen() {
  const navigation = useNavigation();
 

  return (
    <View style={styles.background}>
              <View style={styles.sidebar}>
              </View>
      <View style={styles.logoContainer}>
      <Image
          source={require("../../assets/Medisend_pharmacy1.png")}
          style={styles.image}
        ></Image>
        <Text style={styles.logo}>Successful password reset</Text>
      </View>
      <View style={{bottom:"65%",left:"17%"}}>
            <Text style={{fontFamily:"Amiko-Regular", fontSize:18}}>You can now use your new password to log into your account. </Text>

        </View>
      <View style={styles.log3} >
      <Text style={styles.log}>Making medicine more accesible one order at a time.</Text>
      </View>
      <View style={styles.log4}>    
        <Text style={styles.log1}>Contactless delivery right to your customer’s door. </Text>
        <Image
          source={require("../../assets/Flat.png")}
          style={styles.image1}
        ></Image>
        </View>
        
     <View style={{bottom:"90%",left:"40%"}}> 
         <Text style={{fontSize:15,fontFamily:"Amiko-Regular"}}> Questions? </Text>
         <TouchableOpacity 
                            style={{left:"100%",bottom:"53%"}} 
                            //onPress={() => navigation.navigate("Register Screen")}
                            >
                             
                            <Text style={{fontSize:15,fontFamily:"Amiko-Regular",color:"coral"}}>Contact Us</Text>
                        </TouchableOpacity>
    </View>
    
    
            <View style={styles.buttonsContainer}>
        <TouchableOpacity
           style={styles.login}
          onPress={() => navigation.navigate("Welcome")}

        >
          <Text style={styles.textSign}>Login</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor:"white",
  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "60%",
    right: "25.5%",
    padding: [13, 0, 0, 20],
    width: 200,
    height: 47,
    backgroundColor: "#6396E3",
    borderRadius: 5,
    justifyContent: "center",
  },
 
  logo: {
    position: "absolute",
    fontFamily: "Amiko-Bold",
    fontStyle: "normal",
    width: "120%",
    height: 43,
    fontSize: 32,
    right:"30%",
    color: "#2E2E2E",
    top:"80%",
    marginBottom:"7%"
  },
  log:{
    position: "absolute",
    fontFamily: "Amiko-Bold",
    fontStyle: "normal",
    width: 409,
    height: 43,
    fontSize: 32,
    //lineHeight: 43,
    color: "white",
  },
  log1:{
    position: "absolute",
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    width: 450,
    height: 43,
    fontSize: 20,
    //lineHeight: 43,
    color: "white",
  },
  log3:{
    position: "absolute",
    top: "25%",
    left: "1%",
  },
  log4:{
    position: "absolute",
    top: "40%",
    left: "1%",
  },
  logoContainer: {
    position: "absolute",
    top: "17%",
    left: "60%",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
  login: {
    width: "80%",
    height: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
   // backgroundColor: "rgba(130,130,130,1)",
  },
  signIn: {
    bottom:"45%",
    left:200,
  },
  pass: {
    bottom:"42%",
    left:"8%",
  },
  textSign: {
    height: 21,
    fontFamily: "Amiko-Regular",
    fontWeight: 600,
    fontSize: 16,
    align: "center",
    color: "#FFFFFF",
    
  },
  createAcc: {
    position: "absolute",
    width: 355,
    height: 21,
    fontFamily: "Amiko-Regular",
    fontWeight: 600,
    fontSize: 16,
    color: "#FB9B7A",
    bottom:"50%",
    
  },
 
  inputView: {
    borderRadius: 25,
    bottom: "50%",
    left:200,
    justifyContent: "center",
    marginBottom: 90,
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
    color: "#FB9B7A",
    borderRadius: 25,
    marginBottom: "40%",
    fontFamily: "Amiko-Regular",
    width: 80,
    height: 21,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 21,

  },
  image: {
    width: 370,
    height: 40,
    right:"220%",
    bottom:100,
  },
  image1: {
    width: 120,
    height: 120,
    left:310,
    top:190,
  },
  sidebar:{
    backgroundColor:"#6396E3",
    right:480,
    height:800,
    width:"36%",
    //maxHeight:500,
    
  },
});

export default WelcomeScreen;
