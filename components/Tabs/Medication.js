import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View,Image } from "react-native";

const Medication = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.checkboxInput}>
      <Image
          source={require("../../assets/Rx.png")}
          style={styles.image}
        ></Image>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
         <Text style={styles.label}>Zofran 4mg </Text>
         <Text style={styles.label1}> x2</Text>
        </View>
        <View style={styles.checkboxInput}>
        <Image
          source={require("../../assets/Inhaler.png")}
          style={styles.image}
        ></Image>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Benzedrex Nasal Decognestant Inhaler </Text>
        <Text style={styles.label1}>x1</Text>

        </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: "center",
        flexDirection: "column",
        // padding:500,
        top: "10%",
        marginHorizontal: 600,
        right: "42%",
      },
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 30,
  },
  label: {
    marginTop:-2,
    marginLeft:150,
    fontSize:15,    
   fontWeight:"600",
   fontFamily:"Amiko-Regular" 
  },
  label1: {
    marginTop:-14,
    marginLeft:100,
    fontSize:15,    
   fontWeight:"600",
   fontFamily:"Amiko-Regular" 
  },
  image:{ 
    marginTop:"-4%",
    width:70,
    height:70,
    left:"50%"
  },
});

export default Medication;
