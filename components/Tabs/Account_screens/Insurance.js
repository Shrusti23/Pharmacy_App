import React, { Component, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Image } from "react-native";
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';

const items = [
  // this is the parent or 'item'
  {
    name: 'Insurance Providers',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {  name: 'UnitedHealth', id: 1,},
      {  name: 'Kaiser Foundation', id: 2,},
      {  name: 'Anthem Inc',id: 3,},
      {  name: 'Humana', id: 4, },
      {  name: 'CVS', id: 5,},
      {  name: 'Health Care Service Corporation(HCSC)', id: 6,},
      {  name: 'Centene Corp', id: 7,},
      {  name: 'Cigna Health', id: 8,},
      {  name: 'Wellcare', id: 9,},
      {  name: 'Molina Healthcare Inc', id: 10,},
      {  name: 'Guidewell Mut Holding', id: 11,},
      {  name: 'California Physicians Service', id: 12,},
      {  name: 'Independence Health Group Inc', id: 13,},
      {  name: 'Blue Cross of California', id: 14,},
      {  name: 'Blue Cross Blue Shield of New Jersey', id: 15,},
      {  name: 'Blue Cross Blue Shield of Michigan', id: 16,},
      {  name: 'Blue Cross Blue Shield of North Carolina', id: 17,},
      {  name: 'Blue Cross Blue Shield of Massachusetts', id: 18,},
      {  name: 'Blue Cross Blue Shield of Tennesse', id: 19,},
      {  name: 'Aetna', id: 20,},
      {  name: 'Metropolitan', id: 21,},
      {  name: 'UPMC Health System', id: 22,},
      {  name: 'Caresource', id: 23,},
      {  name: 'Carefirst Inc', id: 24,},
      {  name: 'Health Net of California Inc', id: 25,},
      {  name: 'Highmark Group', id: 26,},
      {  name: 'Medicare', id: 27,},
      {  name: 'Medicaid', id: 28,},
    ],
  },
  
];

export default class InsuranceAcceptance extends Component {
  constructor() {
    super();
    this.state = {
      selectedItems: [],
    };
  }
  onSelectedItemsChange = (selectedItems) => {
    this.setState({ selectedItems });
  };

  render() {
    //const { navigation } = this.props;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:"white" }}>
        <View style={styles.header}>
        <Text style={styles.text}>Your pharmacy currently accepts these insurance plans.</Text></View>
        <ScrollView style={{top:"7%"}}>
            <SectionedMultiSelect
               items={items}
                IconRenderer={Icon}
                 uniqueKey="id"
                 subKey="children"
                //  selectText="Choose Your Insurance Provider..."
                 showDropDowns={true}
                 readOnlyHeadings={true}
                 onSelectedItemsChange={this.onSelectedItemsChange}
                 selectedItems={this.state.selectedItems}
             />
          </ScrollView>
  </View>
  );
    }
}
const styles = StyleSheet.create({
    conatainer:{
      flex: 1, 
       backgroundColor: '#fff'
    },
    header:{
      top:"5%",
      alignSelf:"center",
    },
    text: {
      //color: colors.orange,
      right: "20%",
      fontSize:18,
      fontFamily:"Amiko-Regular",
      fontWeight:"bold",
    },
    image: {
      width: 150,
      height: 120,
      alignSelf:"center",
      bottom:120,
    },
    buttonsContainer: {
      flexDirection: "row",
      position: "absolute",
      bottom: "40%",
      alignItems: "start",
      padding: [13, 0, 0, 20],
      width: 300,
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
    
    }
  })