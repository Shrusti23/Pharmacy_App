import React, { useState } from "react";
import { CheckBox, Text, StyleSheet, View } from "react-native";

const Order_prep = () => {
  const [isSelected, setSelection] = useState(false);
  const [isSelected1, setSelection1] = useState(false);
  const [isSelected2, setSelection2] = useState(false);


  return (
    <View style={styles.container}>
      <View style={styles.checkboxInput}>
        <CheckBox
          value={isSelected}
          onValueChange={setSelection}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Pack All items</Text>
        </View>
        <View style={styles.checkboxInput}>
        <CheckBox
          value={isSelected1}
          onValueChange={setSelection1}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Address</Text>
        </View>
        <View style={styles.checkboxInput}>

        <CheckBox
          value={isSelected2}
          onValueChange={setSelection2}
          style={styles.checkbox}
        />
        <Text style={styles.label}>Attach Seal</Text>
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
        right: "35%",
      },
  checkboxInput: {
    flexDirection: "row",
    marginBottom: 10,
  },
  label: {
    margin: 18,
    marginTop:-2,
    fontSize:15,    
 fontWeight:"400",
fontFamily:"Amiko-Regular" 
  },
});

export default Order_prep;
