import React, { useState,Fragment } from "react";
import { View, Text, TouchableWithoutFeedback ,StyleSheet,TextInput, TouchableOpacity,Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";
import ErrorMessage from "../Tabs/ErrorMessage";
import authApi from "../api/auth";
import useAuth from "../authorization/useAuth";
import { Formik } from 'formik';
import LookUpPharmacy from "./LookUpPharmacy";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  password: Yup.string()
    .label("Password")
    .required()
    .min(4, "Password must have at least 4 characters "),
});

export default function RegisterScreen() {
  const navigation = useNavigation();
  //const auth = useAuth();

  const [registered, setRegisteredSuccess] = useState(false);
  const [error, setError] = useState();

  const handleSubmit = async ({ email, password }) => {
    const result = await authApi.signup(email, password);
    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    setRegisteredSuccess(true);
    console.log("Registered");
  };

    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"white" }}>
         <View style={styles.sidebar}>
              </View>
         <Image
          source={require("../../assets/Medisend_pharmacy1.png")}
          style={styles.image}
        ></Image>
         <View style={styles.header}>
        <Text style={styles.text}>Create your account</Text>
        </View>
        <View style={styles.log3} >
      <Text style={styles.log}>Start expanding your reach with Medisend Pharmacy.</Text>
      </View>
      <View style={styles.log4}>    
        <Text style={styles.log1}>We make it easy for customers to find and purchase from your pharmacy. </Text>
        <Image
          source={require("../../assets/Flat.png")}
          style={styles.image1}
        ></Image>
        </View>
        <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {({
          handleChange,
          values,
          handleSubmit,
          errors,
          isValid,
          isSubmitting,
          touched,
          handleBlur,
        }) => (
          <Fragment>
            <ErrorMessage
              errorValue="Invalid email and/or password"
              //visible={loginFailed}
            />
            <View style={styles.inputView}>
              <Text style={styles.edit}> Email</Text>
              <TextInput
                 value={values.email}
                 onChangeText={handleChange("email")}
                 onBlur={handleBlur("email")}
                 placeholder=""                
                 name="Email"
                 style={styles.inputText}
                 color = "#FB9B7A"
                 autoCorrect={false}
                 autoFocus={true}
              />
              <ErrorMessage
              errorValue={touched.email && errors.email}
              visible={touched.email && errors.email}
            />
            </View>

            <View style={styles.inputView}>
              <Text style={styles.edit}> Password </Text>
              <TextInput
                defaultValue = "at least 8 characters"
                name="Password"
                style={styles.inputText}
                //placeholder={emai[0]}
                placeholderTextColor="#003f5c"
                value={values.password}
                onChangeText={handleChange("password")}
                 autoCorrect={false}
                onBlur={handleBlur("password")}
                autoFocus={true}
              />
              <ErrorMessage
              errorValue={touched.password && errors.password}
              visible={touched.password && errors.password}
            />
            </View>
           

            <View style={styles.inputView}>
              <Text style={styles.edit}> Confirm Password</Text>
              <TextInput
                name="Confirm Password"
                style={styles.inputText}
                //placeholder={emai[0]}
                placeholderTextColor="#003f5c"
                //value={values.firstName}
                //onChangeText={handleChange("firstName")}
                 autoCorrect={false}
                //onBlur={handleBlur("firstName")}
                autoFocus={true}
              />
            </View>
        <View style={styles.buttonsContainer}>
            <TouchableOpacity
           style={styles.login}
           onPress={handleSubmit}
           loading={isSubmitting}>
            <Text style={styles.textSign}>Create my account</Text>
           </TouchableOpacity>
        </View>
        </Fragment>
        )}
      </Formik>
                <View style={styles.skip}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate("LookUpPharmacy")}>
        <View>
              <Text style={styles.skiptext}>Next</Text>
            </View>
          </TouchableWithoutFeedback>
          </View>
          <Text style={styles.blackPlain}> Already have an account? </Text>
      <TouchableOpacity
          style={styles.signIn}
          onPress={() => navigation.navigate("Welcome")}
        >
          <Text style={styles.createAcc}> Sign in </Text>
        </TouchableOpacity>

      </View>
    );
}
const styles = StyleSheet.create({
  skip: {
    position: "absolute",
    right: 20,
    top:"2%"
    
  },
  header:{
    bottom:"60%",
    left:210,
  },
  text: {
    //color: colors.orange,
    right: "20%",
    fontSize:28,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  skiptext: {
    color: "orange",
    fontFamily:"Amiko-SemiBold",
    fontSize:15,
  },
  inputView: {
    borderRadius: 25,
    bottom: "55%",
    left:"15%",
    justifyContent: "center",
    marginBottom: 60,
    width: 300,
    height: 48,
    backgroundColor: "#FBFBFB",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "#BDBDBD",
  },
  inputText: {
    width: 300,
    height: 46,

    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontStyle: 18,
    lineHeight: 21,

    color: "black",

    //opacity: 0.2,
  },
  edit: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "#FB9B7A",
    borderRadius: 25,
    marginBottom: "25%",
    fontFamily: "Amiko-Regular",
    width: 200,
    height: 21,
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 21,

  },
  buttonsContainer: {
    flexDirection: "row",
    position: "absolute",
    bottom: "52%",
    right:"24%",
    alignItems: "start",
    padding: [13, 0, 0, 20],
    width: 310,
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
    fontSize: 15,
    fontWeight: "bold",
    lineHeight: 20,
  },
  image: {
    width: 380,
    height: 40,
    right:"35%",
    bottom:875,
  },
  createAcc: {
    position: "absolute",
    width: 355,
    height: 21,
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: 16,
    lineHeight: 21,
    color: "#FB9B7A",
  },
  blackPlain: {
    position: "absolute",
    width: 355,
    height: 21,
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: 16,
    lineHeight: 21,
    color: "black",
    bottom:"48%",
    right:300
  },
  signIn: {
    bottom:"49.6%",
    left:275,
  },
  sidebar:{
    backgroundColor:"#6396E3",
    bottom:100,
    right:480,
    height:900,
    width:"36%",
    //maxHeight:500,
    
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
    top: "15%",
    left: "1%",
  },
  log4:{
    position: "absolute",
    top: "30%",
    left: "1%",
  },
  image1: {
    width: 120,
    height: 120,
    left:310,
    top:190,
  },
})