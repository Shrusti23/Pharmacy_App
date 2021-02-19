import React, { useState } from "react";
import { ScrollView } from "react-native";
import { View, Text, StyleSheet, TouchableOpacity,TextInput } from "react-native";
import { Modal, Portal, Button, Provider } from 'react-native-paper';

import { useNavigation } from "@react-navigation/native";

import * as Yup from "yup";
import ErrorMessage from "../ErrorMessage";
import authApi from "../../api/auth";
import useAuth from "../../authorization/useAuth";
import { Formik } from 'formik';


const validationSchema = Yup.object().shape({
    address: Yup.string()
      .label("address")
      .min(4,"Enter street address")
      .required(),
    apartmentnumber: Yup.string()
      .label("apartmentnumber")
      .required(),
    city: Yup.string()
      .label("city")
      .required()
      .min(4, "city must have at least 4 characters "),
    state: Yup.string()
      .label("state")
      .required()
      .min(2, "state must have at least 4 characters "),
    postalcode: Yup.string()
      .label("postalcode")
      .required()
      .min(4, "postalcode must have at least 4 characters "),
});

export default function Address() {
    const navigation = useNavigation();
    const [error, setError] = useState();

    const handleSubmit = async ({address,apartnumber,city,state,postalcode}) => {
      const result = await authApi.address(address,apartnumber,city,state,postalcode);
      console.log(result.data.address);
  
      if (!result.ok) {
        if (result.data) setError(result.data.error);
        else {
          setError("An unexpected error occurred.");
          console.log(result);
        }
        return;
      }
      //navigation.navigate("EnterPharmacyDetails");
    };
   
      return (
          <View style={styles.conatainer}>
                           <Text> Hello</Text>

               {/* <Formik
        initialValues={{ 
          address: "", 
          apartmentnumber:"",
          city: "",
          state:"",
          postalcode:"",
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
              <ErrorMessage
                errorValue={touched.address && errors.address}
               // visible={touched.address && errors.address}
              />
              <TextInput
                name="Street address"
                style={styles.inputText}
                placeholder="street address"
                placeholderTextColor="#003f5c"
                value={values.address}
                onChangeText={handleChange("address")}
                 autoCorrect={false}
                onBlur={handleBlur("address")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <ErrorMessage
                errorValue={touched.apartmentnumber && errors.apartmentnumber}
               // visible={touched.apartmentnumber && errors.apartmentnumber}
              />
              <TextInput
                name="apartment"
                style={styles.inputText}
                placeholder=""
                placeholderTextColor="#003f5c"
                value={values.apartmentnumber}
                onChangeText={handleChange("apartmentnumber")}
                 autoCorrect={false}
                onBlur={handleBlur("apartmentnumber")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <ErrorMessage
                errorValue={touched.city && errors.city}
               // visible={touched.city && errors.city}
              />
              <TextInput
                name="City"
                style={styles.inputText}
                placeholder="city name"
                placeholderTextColor="#003f5c"
                value={values.city}
                onChangeText={handleChange("city")}
                 autoCorrect={false}
                onBlur={handleBlur("city")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <ErrorMessage
                errorValue={touched.state && errors.state}
               // visible={touched.state && errors.state}
              />
              <TextInput
                name="state"
                style={styles.inputText}
                placeholder="state"
                placeholderTextColor="#003f5c"
                value={values.state}
                onChangeText={handleChange("state")}
                 autoCorrect={false}
                onBlur={handleBlur("state")}
                autoFocus={true}
              />
            </View>
            <View style={styles.inputView}>
              <ErrorMessage
                errorValue={touched.postalcode && errors.postalcode}
               // visible={touched.postalcode && errors.postalcode}
              />
              <TextInput
                name="Postalcode"
                style={styles.inputText}
                placeholder="postalcode"
                placeholderTextColor="#003f5c"
                value={values.postalcode}
                onChangeText={handleChange("postalcode")}
                 autoCorrect={false}
                onBlur={handleBlur("postalcode")}
                autoFocus={true}
              />
            </View>
            </Fragment>
          )}
        </Formik>

             */}
          </View>
          );
  }
  const styles = StyleSheet.create({
    conatainer:{
      flex: 1, 
       backgroundColor: '#fff'
    },
    inputView: {
        borderRadius: 25,
        bottom: "28%",
        left:60,
        justifyContent: "center",
        marginBottom: 50,
        width: 500,
        height: 48,
        backgroundColor: "#F4F4F4",
        borderWidth: 1,
        borderRadius: 5,
        borderColor: "#BDBDBD",
      },
    inputText: {
          width: "50%",
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
          borderRadius: 25,
          marginBottom: "10%",
          fontFamily: "Amiko-Regular",
          width: "70%",
          height: 21,
          fontWeight: 600,
          fontSize: 16,
          right:"100%"
        },
  })