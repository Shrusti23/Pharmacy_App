import React, { Fragment, useState } from "react";
import { View, Text, StyleSheet,TouchableWithoutFeedback, TouchableOpacity,TextInput,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";

import * as Yup from "yup";
import ErrorMessage from "../Tabs/ErrorMessage";
import authApi from "../api/auth";
import useAuth from "../authorization/useAuth";
import { Formik } from 'formik';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .label("Email")
    .email("Enter a valid email")
    .required("Please enter a registered email"),
  address: Yup.string()
    .label("address")
    .required()
    .min(4, "address must have at least 4 characters "),
  apartmentnumber: Yup.string()
    .label("apartmentnumber")
    .required()
    .min(4, "apartmentnumber must have at least 4 characters "),
  state: Yup.string()
    .label("state")
    .required()
    .min(4, "state must have at least 4 characters "),
  city: Yup.string()
    .label("City")
    .required()
    .min(4, "City must have at least 4 characters "),
  postalcode: Yup.string()
    .label("postalcode")
    .required()
    .min(4, "postalcode must have at least 4 characters "),
  countrycode: Yup.string()
    .label("countrycode")
    .required()
    .min(4, "countrycode must have at least 4 characters "),
  phonenumber: Yup.string()
    .label("phonenumber")
    .required()
    .min(4, "phonenumber must have at least 4 characters "),
  website: Yup.string()
    .label("website")
    .required()
    .min(4, "website must have at least 4 characters "),
    
});

export default function EnterPharmacyDetails() {
  const navigation = useNavigation();

  const [error, setError] = useState();

  const handleSubmit = async ({address,apartmentnumber, city, state, postalcode,email,countrycode,phonenumber,website}) => {
    const result = await authApi.addContact(address,apartmentnumber, city, state, postalcode,email,countrycode,phonenumber,website);
    console.log(result.data.addContact);

    if (!result.ok) {
      if (result.data) setError(result.data.error);
      else {
        setError("An unexpected error occurred.");
        console.log(result);
      }
      return;
    }
    navigation.navigate("InsuranceQuestion");
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
        <View style={styles.sidebar_icon}> <FontAwesome name="check-circle" size={40} color="white" /></View>
        <View style={styles.sidebar_icon}> <MaterialCommunityIcons name="numeric-3-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon1}> <MaterialCommunityIcons name="numeric-4-circle" size={40} color="white" /> </View>
        <View style={styles.sidebar_icon1}><MaterialCommunityIcons name="numeric-5-circle" size={40} color="white" /> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Create your account</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Look up your Pharmacy</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Pharmacy Details</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Contacts</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Insurance Acceptance</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Terms and Agreement</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Verify</Text> </View>
        <View style={styles.side_header}> <Text style={styles.side_text}>Complete</Text> </View>
        <Image
          source={require("../../assets/Enter_Details.png")}
          style={styles.image1}
        ></Image>
        <View style={styles.header}>
        <Text style={styles.text}>Let us know how customers and drivers can reach you</Text>
        </View>
        <Formik
        initialValues={{ 
          email: "", 
          address:"",
          apartmentnumber: "",
          city:"",
          state:"",
         postalcode:"",
         countrycode:"",
         phonenumber:"",
         website:"", 
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
     <View style={styles.inputView1}>
              <Text style={styles.edit1}> Street Address</Text>
              <TextInput
                name="Street Address"
                style={styles.inputText1}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.address}
                onChangeText={handleChange("address")}
                 autoCorrect={false}
                onBlur={handleBlur("address")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView2}>
              <Text style={styles.edit2}> City</Text>
              <TextInput
                name="City"
                style={styles.inputText2}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.city}
                onChangeText={handleChange("city")}
                 autoCorrect={false}
                onBlur={handleBlur("city")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.edit}>Phone Number</Text>
              <TextInput
                name="Phone Number"
                style={styles.inputText}
               placeholder=""
                placeholderTextColor="#003f5c"
               value={values.phonenumber}
               onChangeText={handleChange("phonenumber")}
                 autoCorrect={false}
               onBlur={handleBlur("phonenumber")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <Text style={styles.edit}> Website</Text>
              <TextInput
                name="Website"
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.website}
                onChangeText={handleChange("website")}
                 autoCorrect={false}
                onBlur={handleBlur("website")}
                autoFocus={true}
              />
            </View>
           
            <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.login}
          onPress={() => navigation.navigate("InsuranceQuestion")}
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
          onPress={() => navigation.navigate("LookUpPharmacy")}
        >
          <Text style={styles.textSign}>Previous</Text>
        </TouchableOpacity>
        </View>



    </View>
  );
}
const styles = StyleSheet.create({
skip: {
  position: "absolute",
  right: 20,
  top:"2%"
  
},
skiptext: {
  color: "orange",
  fontFamily:"Amiko-SemiBold",
  fontSize:15,
},
header:{
  bottom:"70%",
  marginBottom:40,
  left:"16%",
},
text: {
  //color: colors.orange,
  right: "20%",
  fontSize:28,
  fontFamily:"Amiko-Regular",
  fontWeight:"bold",
},
inputView: {
  borderRadius: 25,
  bottom: "69.5%",
  left:"16%",
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
  bottom: "67%",
  left:"10%",
  justifyContent: "center",
  marginBottom: 50,
  width: 330,
  height: 48,
  backgroundColor: "#F4F4F4",
  borderWidth: 1,
  borderRadius: 5,
  borderColor: "#BDBDBD",
},
inputView2: {
  borderRadius: 25,
  bottom: "70.7%",
  left:"28%",
  justifyContent: "center",
  marginBottom: 30,
  width: 150,
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
  width: 330,
    height:46,
    color:"black",
    fontFamily: "Amiko-Regular",
    fontStyle: "normal",
    fontWeight: "normal",
    fontStyle: 18,

},
inputText2: {
  width:150,
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
edit2: {
  alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    color: "#FB9B7A",
    borderRadius: 25,
    marginBottom: "75%",
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
  left:"26%",
  height: 47,
  backgroundColor: "#6396E3",
  borderRadius: 5,
  alignItems: "center",
},
buttonsContainer1: {
  bottom: "72%",
  alignItems: "center",
 left:"6%",
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

},image: {
  width: 380,
  height: 40,
  right:"35%",
  bottom:"33.5%",
},
image1: {
  width: 310,
  height: 150,
  left:"17%",
  bottom:"71%",
},
sidebar:{
  backgroundColor:"#6396E3",
  bottom:100,
  right:480,
  height:900,
  width:"35%",
  //maxHeight:500,
},
side_header:{
  bottom:"45.9%",
  marginBottom:40,
  alignSelf:"center",
  right:450,
},
side_text: {
  color: "white",
  right: "20%",
  fontSize:25,
  fontFamily:"Amiko-Regular",
  fontWeight:"bold",
},
sidebar_icon:{
  bottom:"31%",
  right:"44%",
  marginBottom:40,
},
sidebar_icon1:{
  bottom:"23%",
  right:"44%",
  marginBottom:40,
},
})