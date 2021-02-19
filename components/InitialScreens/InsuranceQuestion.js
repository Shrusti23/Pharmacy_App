import React, { Component } from 'react';
import { View, Text, StyleSheet,TouchableWithoutFeedback,Image, TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons';
import SectionedMultiSelect from 'react-native-sectioned-multi-select';
import { FontAwesome,MaterialCommunityIcons } from "@expo/vector-icons";
import { ScrollView } from 'react-native-gesture-handler';

const items = [
  // this is the parent or 'item'
  {
    name: 'Insurance Providers',
    id: 0,
    // these are the children or 'sub items'
    children: [
      {  name: 'UnitedHealth', id: 1,},
      {  name: 'Kaiser Foundation', id: 2,},
      // {  name: 'Anthem Inc',id: 3,},
      // {  name: 'Humana', id: 4, },
      // {  name: 'CVS', id: 5,},
      {  name: 'Health Care Service Corporation(HCSC)', id: 6,},
      // {  name: 'Centene Corp', id: 7,},
      // {  name: 'Cigna Health', id: 8,},
      // {  name: 'Wellcare', id: 9,},
      // {  name: 'Molina Healthcare Inc', id: 10,},
      // {  name: 'Guidewell Mut Holding', id: 11,},
      // {  name: 'California Physicians Service', id: 12,},
      // {  name: 'Independence Health Group Inc', id: 13,},
      // {  name: 'Blue Cross of California', id: 14,},
      // {  name: 'Blue Cross Blue Shield of New Jersey', id: 15,},
      // {  name: 'Blue Cross Blue Shield of Michigan', id: 16,},
      // {  name: 'Blue Cross Blue Shield of North Carolina', id: 17,},
      // {  name: 'Blue Cross Blue Shield of Massachusetts', id: 18,},
      // {  name: 'Blue Cross Blue Shield of Tennesse', id: 19,},
      // {  name: 'Aetna', id: 20,},
      // {  name: 'Metropolitan', id: 21,},
      // {  name: 'UPMC Health System', id: 22,},
      // {  name: 'Caresource', id: 23,},
      // {  name: 'Carefirst Inc', id: 24,},
      // {  name: 'Health Net of California Inc', id: 25,},
      // {  name: 'Highmark Group', id: 26,},
      // {  name: 'Medicare', id: 27,},
      // {  name: 'Medicaid', id: 28,},
    ],
  },
  
];

export default class InsuranceQuestion extends Component {
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
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:"white" }}>
      <View style={styles.sidebar}>
             </View>
     <Image
         source={require("../../assets/Medisend_pharmacy1.png")}
         style={styles.image}
       ></Image>
       <View style={styles.sidebar_icon}>   <FontAwesome name="check-circle" size={40} color="white" />  </View>
       <View style={styles.sidebar_icon}>   <FontAwesome name="check-circle" size={40} color="white" /></View>
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
         source={require("../../assets/health-insurance1.png")}
         style={styles.image1}></Image>
        <View style={styles.header}>
          <Text style={styles.text}>What health insurance plans does your pharmacy accept?</Text>
          <Text fontFamily="Amiko-Regular" fontSize={14}> Let your customers know which health insurance plans your pharmacy  accepts. </Text>
          <Text style={styles.text1}>  Please select all that applies. </Text>
          <ScrollView style={{top:"34%",left:"10%"}}>
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
        <View style={styles.buttonsContainer}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.props.navigation.navigate("Terms and agreement")}>
            <Text style={styles.textSign}>Continue</Text>
          </TouchableOpacity>
       </View>
       <View style={styles.buttonsContainer1}>
          <TouchableOpacity
            style={styles.login}
            onPress={() => this.props.navigation.navigate("EnterPharmacyDetails")}>
             <Text style={styles.textSign}>Previous</Text>
          </TouchableOpacity>
       </View>
   </View>
    );
  }
}
 
const styles = StyleSheet.create({

  header:{
    bottom:"76%",
    left:"20%",
  },
  text: {
    //color: colors.orange,
    right: "20%",
    fontSize:20,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  text1: {
    //color: colors.orange,
    right: "20%",
    fontSize:20,
    fontFamily:"Amiko-Regular",
    fontWeight:"bold",
  },
  image: {
    width: 380,
    height: 40,
    right:"35%",
    bottom:"35%",
  },
  image1: {
    width: 100,
    height: 100,
    left:"17%",
    bottom:"77%",
  },
  buttonsContainer: {
    bottom: "67.5%",
    width: 200,
    left:"40%",
    height: 47,
    backgroundColor: "#6396E3",
    borderRadius: 5,
    alignItems: "center",
  },
  buttonsContainer1: {
    bottom: "69.5%",
    alignItems: "center",
   right:"7%",
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
   // backgroundColor: "rgba(130,130,130,1)",
    
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
  sidebar:{
    backgroundColor:"#6396E3",
    bottom:100,
    right:480,
    height:900,
    width:"35%",
    //maxHeight:500,
  },
  side_header:{
    bottom:"48%",
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
    bottom:"32%",
    right:"44%",
    marginBottom:40,
  },
  sidebar_icon1:{
    bottom:"24%",
    right:"44%",
    marginBottom:40,
  },
  })