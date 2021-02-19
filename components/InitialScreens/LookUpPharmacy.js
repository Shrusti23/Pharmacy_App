import React, { Fragment, useState  } from "react";
import { View, Text, StyleSheet,TouchableWithoutFeedback, TouchableOpacity, TextInput,Image } from "react-native";

import * as Yup from "yup";
import ErrorMessage from "../Tabs/ErrorMessage";
import authApi from "../api/auth";
import useAuth from "../authorization/useAuth";
import { Formik } from 'formik';

import { useNavigation } from "@react-navigation/native";
import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  name: Yup.string()
    .label("name")
    .required()
    .min(4, "name must have at least 4 characters "),
  npi: Yup.string()
    .label("npi")
    .required()
    .min(4, "npi must have at least 4 characters "),
  state: Yup.string()
    .label("state")
    .required()
    .min(4, "state must have at least 4 characters "),
  zipcode: Yup.string()
    .label("Zip Code")
    .required()
    .min(4, "Zip Code must have at least 4 characters "),
    
    
});

export default function LookUpPharamcy() {
  const navigation = useNavigation();
  const [error, setError] = useState();

  const handleSubmit = async ({email,name,npi,state,zipcode}) => {
    const result = await authApi.lookup(email,name,npi,state,zipcode);
    console.log(result.data.lookup);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    navigation.navigate("EnterPharmacyDetails");
  };
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
      <View style={styles.sidebar}>
              </View> 
    <Image
          source={require("../../assets/Medisend_pharmacy1.png")}
          style={styles.image}
        ></Image>  
        <View style={styles.sidebar_icon}>   <FontAwesome name="check-circle" size={40} color="white" />  </View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-2-circle" size={40} color="white" /></View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-3-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-4-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon}><MaterialCommunityIcons name="numeric-5-circle" size={40} color="white" /> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Create your account</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Look up your Pharmacy</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Pharmacy Details</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Verify</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Complete</Text> </View>
        <Image
          source={require("../../assets/Look_Pharmacy.png")}
          style={styles.image1}
        ></Image>  
         <View style={styles.header}>
        <Text style={styles.text}>Let’s look up your pharmacy</Text>
        </View>
        <Formik
        initialValues={{ 
          email: "", 
          name:"",
          npi: "",
          state:"",
        zipcode:"",
       }}
       // onSubmit={handleSubmit}
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
          <View style={styles.inputView}>
              <Text style={styles.edit}> Pharmacy name</Text>
              <ErrorMessage
                errorValue={touched.name && errors.name}
               // visible={touched.name && errors.name}
              />
              <TextInput
                name="Pharmacy name"
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.name}
                onChangeText={handleChange("name")}
                 autoCorrect={false}
                onBlur={handleBlur("name")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.edit}> npi Number</Text>
              <ErrorMessage
                errorValue={touched.npi && errors.npi}
               // visible={touched.npi && errors.npi}
              />
              <TextInput
                name="NPI Number"
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.npi}
                onChangeText={handleChange("npi")}
                 autoCorrect={false}
                onBlur={handleBlur("npi")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView1}>
              <Text style={styles.edit1}> Zip Code</Text>
              <ErrorMessage
                errorValue={touched.zipcode && errors.zipcode}
               // visible={touched.zipcode && errors.zipcode}
              />
              <TextInput
                name="Zip Code"
                style={styles.inputText1}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.zipcode}
                onChangeText={handleChange("zipcode")}
                 autoCorrect={false}
                onBlur={handleBlur("zipcode")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView2}>
              <Text style={styles.edit1}> state</Text>
              <ErrorMessage
                errorValue={touched.state && errors.state}
               // visible={touched.state && errors.state}
              />
              <TextInput
                name="state"
                style={styles.inputText2}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.state}
                onChangeText={handleChange("state")}
                 autoCorrect={false}
                onBlur={handleBlur("state")}
                autoFocus={true}
              />
           </View>
            <View style={styles.buttonsContainer}> 
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("EnterPharmacyDetails")}
          loading={isSubmitting}
          //onPress={handleSubmit} 
          >
          <Text style={styles.textSign}>Continue</Text>
        </TouchableOpacity>
        </View>
        </Fragment>
          )}
        </Formik>
        <View style={styles.buttonsContainer1}> 
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.textSign}>Previous</Text>
        </TouchableOpacity>
        </View>

    </View>
  );
}
const styles = StyleSheet.create({
header:{
  bottom:"70%",
  marginBottom:30,
  alignSelf:"center",
  left:250,
},
side_header:{
  bottom:"48.5%",
  marginBottom:60,
  alignSelf:"center",
  right:450,
},
text: {
  //color: colors.orange,
 // right: "50%",
  fontSize:30,
  fontFamily:"Amiko-Regular",
  fontWeight:"bold",
},
side_text: {
  color: "white",
  right: "20%",
  fontSize:25,
  fontFamily:"Amiko-Regular",
  fontWeight:"bold",
},
inputView: {
  borderRadius: 25,
  bottom: "68%",
  left:260,
  justifyContent: "center",
  marginBottom: 50,
  width: 500,
  height: 48,
  backgroundColor: "#F4F4F4",
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#BDBDBD",
},
inputView1: {
  borderRadius: 25,
  bottom:"68%",
  left: "9%",
  justifyContent: "center",
  marginBottom: 50,
  width: 230,
  height: 48,
  backgroundColor: "#F4F4F4",
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#BDBDBD",
},
inputView2: {
  borderRadius: 25,
  bottom: "72%",
  left:"27%",
  justifyContent: "center",
  marginBottom: 50,
  width: 230,
  height: 48,
  backgroundColor: "#F4F4F4",
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#BDBDBD",
},
inputText: {
  width: 500,
    height:46,
    color:"black",
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontStyle: 18,

},
inputText1: {
  width: 230,
    height:46,
    color:"black",
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontStyle: 18,

},
inputText2: {
  width:230,
    height:46,
    color:"black",
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontStyle: 18,

},
edit: {
  alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "#FB9B7A",
    borderRadius: 25,
    marginBottom: "19%",
    fontFamily: "Amiko-Regular",
    width: 400,
    height: 21,
    fontWeight: 600,
    fontSize: 16,
   // lineHeight: 21,
},
edit1: {
  alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "#FB9B7A",
    borderRadius: 25,
    marginBottom: "35%",
    fontFamily: "Amiko-Regular",
    width: 400,
    height: 21,
    fontWeight: 600,
    fontSize: 16,
   // lineHeight: 21,
},
buttonsContainer: {
  bottom: "70%",
  width: 200,
  left:"30%",
  height: 47,
  backgroundColor: "#6396E3",
  borderRadius: 5,
  alignItems: "center",
},
buttonsContainer1: {
  bottom: "72%",
  alignItems: "center",
 left:"8%",
 //marginBottom: 20,
  width: 200,
  height: 50,
  backgroundColor: "#6396E3",
  borderRadius: 5,
},
login: {
  width: "45%",
  height: 45,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 50,  
},
login1: {
  width: "45%",
  bottom:"10%",
  height: 45,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: 50,  
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
  bottom:"34%",
},
image1: {
  width: 100,
  height: 100,
  left:"17%",
  bottom:"71%",
},
sidebar:{
  backgroundColor:"#6396E3",
  bottom:100,
  right:480,
  height:900,
  width:"36%",
  //maxHeight:500,
},
sidebar_icon:{
  bottom:"30.5%",
  right:"44%",
  marginBottom:50,
},
})